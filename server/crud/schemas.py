from pydantic import BaseModel
from typing import Union, List

class User(BaseModel):
    username: str
    email: str
    password: str
    name: str
    surname: str
    premium: bool
    trials: int
    photo: str

class Favorite(BaseModel):
    user_id: int
    collection_id: str

class History(BaseModel):
    user_id: int
    collection_id: str
    time: int


class ShowFavorite(BaseModel):
    collection_id: str
    class Config():
        orm_mode = True

class ShowHistory(BaseModel):
    collection_id: str
    time: int
    class Config():
        orm_mode = True
    
class ShowUser(BaseModel):
    username: str
    email: str
    name: str
    surname: str
    premium: bool
    trials: int
    photo: str
    history: List[ShowHistory] = []
    favorites: List[ShowFavorite] = []
    class Config():
        orm_mode = True

class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Union[str, None] = None