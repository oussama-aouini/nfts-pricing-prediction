from audioop import avg
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from forecasting.preprocessors import get_data, avg_price_preprocessor
from forecasting.predictors import avg_price_predictor

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
    raw_data = get_data(collection_id)
    processed_data = avg_price_preprocessor(raw_data)
    predictions = avg_price_predictor(processed_data)
    return predictions

