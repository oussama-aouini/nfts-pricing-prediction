from fastapi import FastAPI
import cloudscraper
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA

app = FastAPI()


@app.get("/")
def home():
    scraper = cloudscraper.create_scraper()
    collection_id = '1451b80cbf65fb6dd796dd094d3a94bf7d2d4e759181ea2b0fa479b69e9c73e7'
    url = f"https://api.solscan.io/collection/trade?collectionId={collection_id}&offset=0&limit=90000"
    response = scraper.get(url)

    data = pd.DataFrame(response.json()['data'])
    data = data[['price', 'tradeTime']]

    dates = []
    for i in range(len(data.index)):
        dates.append(datetime.fromtimestamp(
            data.loc[i]['tradeTime']).strftime('%Y-%m-%d'))

    data['date'] = pd.to_datetime(dates)

    start = data.date.min()
    end = data.date.max()

    index = pd.date_range(start, end, freq='D')
    columns = ['avg. price']
    complete_avg_price = pd.DataFrame(index=index, columns=columns)

    recorded_avg_price = data.groupby('date').price.mean()

    for index, value in recorded_avg_price.items():
        complete_avg_price.loc[index] = value
    complete_avg_price['avg. price'] = complete_avg_price['avg. price'].fillna(
        complete_avg_price['avg. price'].mean())

    to_row = int(len(complete_avg_price)*0.9)

    training_data = list(complete_avg_price[0:to_row]['avg. price'])
    testing_data = list(complete_avg_price[to_row:]['avg. price'])

    model_predictions = []
    n_test_obser = len(testing_data)
    for i in range(n_test_obser):
        model = ARIMA(training_data, order=(4, 1, 0))
        model_fit = model.fit()
        output = model_fit.forecast()
        yhat = output[0]
        model_predictions.append(yhat)
        actual_test_value = testing_data[i]
        training_data.append(actual_test_value)
    return {"model_predictions": model_predictions}
