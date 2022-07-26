from fastapi import APIRouter, Depends

from forecasting.preprocessors import get_data, avg_price_preprocessor, floor_price_preprocessor, sales_volume_preprocessor
from forecasting.predictors import avg_price_predictor, floor_price_predictor, sales_volume_predictor

# from ..crud import schemas, oauth2

router = APIRouter(
    tags=["forecasting"]
)

@router.get('/avg_price')
def predict_avg_price(collection_id):
    raw_data = get_data(collection_id)
    processed_data = avg_price_preprocessor(raw_data)
    predictions = avg_price_predictor(processed_data)
    return predictions

@router.get('/floor_price')
def predict_floor_price(collection_id):
    raw_data = get_data(collection_id)
    processed_data = floor_price_preprocessor(raw_data)
    predictions = floor_price_predictor(processed_data)
    return predictions

@router.get('/sales_volume')
def predict_sales_volume(collection_id):
    raw_data = get_data(collection_id)
    processed_data = sales_volume_preprocessor(raw_data)
    predictions = sales_volume_predictor(processed_data)
    return predictions