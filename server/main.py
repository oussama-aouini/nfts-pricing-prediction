from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import requests

import pandas as pd
from datetime import datetime, timedelta
from statsmodels.tsa.arima.model import ARIMA

import json


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Access-Control-*"]
)

@app.get('/avg_price')
def get_predictions(collection_id):
    url = f"https://api.solscan.io/collection/trade?collectionId={collection_id}&offset=0&limit=all"

    response = requests.get(url)

    data = pd.DataFrame(response.json()['data'])
    data = data[['price', 'tradeTime']]

    dates = []
    for i in range(len(data.index)):
        dates.append(datetime.fromtimestamp(data.loc[i]['tradeTime']).strftime('%Y-%m-%d'))

    data['date'] = pd.to_datetime(dates)
    data['price'] = data['price']/10**9

    start = data.date.min()
    end = data.date.max()

    index = pd.date_range(start, end, freq='D')
    columns = ['avg_price']
    full_time_frame = pd.DataFrame(index=index, columns=columns)

    daily_avg_price = data.groupby('date').price.mean()
    for index, value in daily_avg_price.items():
        full_time_frame.loc[index] = value
    full_time_frame = full_time_frame.ffill()

    training_data = list(full_time_frame['avg_price'])

    model_predictions = []
    number_of_days_to_predict = 7

    for i in range(number_of_days_to_predict):
        if len(training_data) <= 2:
            model = ARIMA(training_data, order = (0,0,0))
        else:
            model = ARIMA(training_data, order = (4,1,0))
        model_fit = model.fit()
        output = model_fit.forecast()
        yhat = output[0]
        model_predictions.append(yhat)
        training_data.append(yhat)


    index = pd.date_range(end + timedelta(days=1), periods=7, freq='D')
    predictions = pd.DataFrame(index = index, data = {'avg_price' : model_predictions})
    history_and_prediction = full_time_frame.append(predictions)
    history_and_prediction.reset_index(inplace=True)
    history_and_prediction['index'] = history_and_prediction['index'].astype(str)

    if history_and_prediction.shape[0] >= 21:
        selected_data = history_and_prediction.iloc[-21:]
    else:
        selected_data = history_and_prediction
    

    return json.loads(selected_data.to_json(orient='records'))