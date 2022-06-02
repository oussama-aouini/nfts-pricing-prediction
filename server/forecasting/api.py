from fastapi import APIRouter

from forecasting.preprocessors import get_data, avg_price_preprocessor
from forecasting.predictors import avg_price_predictor

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
def predict_floor_price():
    pass

@router.get('/sales_volume')
def predict_sales_volume():
    pass