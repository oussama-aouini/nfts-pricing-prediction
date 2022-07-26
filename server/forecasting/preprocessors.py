import requests
import pandas as pd
from datetime import datetime


def get_data(collection_id):
    url = f"https://api.solscan.io/collection/trade?collectionId={collection_id}&offset=0&limit=all"
    response = requests.get(url)
    data = pd.DataFrame(response.json()['data'])
    data = data[['price', 'tradeTime']]
    dates = []
    for i in range(len(data.index)):
        dates.append(datetime.fromtimestamp(data.loc[i]['tradeTime']).strftime('%Y-%m-%d'))
    data['date'] = pd.to_datetime(dates)
    data['price'] = data['price']/10**9
    return data

def avg_price_preprocessor(raw_data):
    start = raw_data.date.min()
    end = raw_data.date.max()
    
    index = pd.date_range(start, end, freq='D')
    columns = ['avg_price']
    full_time_frame = pd.DataFrame(index=index, columns=columns)
    daily_avg_price = raw_data.groupby('date').price.mean()
    for index, value in daily_avg_price.items():
        full_time_frame.loc[index] = value
    full_time_frame = full_time_frame.ffill()
    return full_time_frame

def floor_price_preprocessor(raw_data):
    start = raw_data.date.min()
    end = raw_data.date.max() 


    index = pd.date_range(start, end, freq='D')
    columns = ['Fprice']
    fprice = pd.DataFrame(index=index, columns=columns)

    fprice_with_missing_days = raw_data.groupby('date').price.min()

    for index, value in fprice_with_missing_days.items():
        fprice.loc[index] = value
    fprice['Fprice'] = fprice.Fprice.fillna(fprice.Fprice.mean())
    return fprice

def sales_volume_preprocessor(raw_data):
    start = raw_data.date.min()
    end = raw_data.date.max()

    index = pd.date_range(start, end, freq='D')
    columns = ['Sales']
    sales = pd.DataFrame(index=index, columns=columns)

    sales_with_missing_days = raw_data.groupby('date').date.count()

    for index, value in sales_with_missing_days.items():
        sales.loc[index] = value

    sales['Sales'] = sales.Sales.fillna(0)
    return sales