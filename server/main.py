from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from crud import models
from crud.database import engine

from crud.routers import users, history, favorites, authentication
from forecasting import api

app = FastAPI()

app.include_router(users.router)
app.include_router(favorites.router)
app.include_router(history.router)
app.include_router(authentication.router)
app.include_router(api.router)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Access-Control-*"]
)

models.Base.metadata.create_all(engine)






