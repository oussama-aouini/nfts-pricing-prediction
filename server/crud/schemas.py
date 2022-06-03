from pydantic import BaseModel
from typing import Union

class User(BaseModel):
    username: str
    email: str
    password: str
    name: str
    surname: str
    premium: bool
    trials: int
    photo: str
    
class ShowUser(BaseModel):
    username: str
    email: str
    name: str
    surname: str
    premium: bool
    trials: int
    photo: str
    class Config():
        orm_mode = True

class Favorite(BaseModel):
    user_id: str
    collection_id: str

class History(BaseModel):
    user_id: str
    collection_id: str
    time: float

class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Union[str, None] = None