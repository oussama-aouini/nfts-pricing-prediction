import pandas as pd
import json
from datetime import datetime, timedelta
from statsmodels.tsa.arima.model import ARIMA

def avg_price_predictor(data):
    full_time_frame = data

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


    index = pd.date_range(full_time_frame.index[-1] + timedelta(days=1), periods=7, freq='D')
    predictions = pd.DataFrame(index = index, data = {'avg_price' : model_predictions})
    history_and_prediction = full_time_frame.append(predictions)
    history_and_prediction.reset_index(inplace=True)
    history_and_prediction['index'] = history_and_prediction['index'].astype(str)

    if history_and_prediction.shape[0] >= 21:
        selected_data = history_and_prediction.iloc[-21:]
    else:
        selected_data = history_and_prediction
    
    return json.loads(selected_data.to_json(orient='records'))

def floor_price_predictor():
    pass

def sales_volume_predictor():
    pass