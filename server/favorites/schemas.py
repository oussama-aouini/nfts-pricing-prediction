from pydantic import BaseModel

class Favorites(BaseModel):
    collection_id: str
    user_id: int