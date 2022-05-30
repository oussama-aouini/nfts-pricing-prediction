from statistics import mode
from fastapi import FastAPI, Depends, status
from . import schemas, models
from .database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

models.Base.metadata.create_all(engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post('/favorites', status_code=status.HTTP_201_CREATED)
def add_favorite(request: schemas.Favorites, db: Session = Depends(get_db)):
    new_favorite = models.Favorites(collection_id = request.collection_id, user_id = request.user_id)
    db.add(new_favorite)
    db.commit()
    db.refresh(new_favorite)
    return new_favorite

@app.get('/favorites/{user_id}')
def read_favorites(user_id, db: Session = Depends(get_db)):
    favorites = db.query(models.Favorites).filter(models.Favorites.user_id == user_id).all()
    return favorites

@app.delete('/favorites/{collection_id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_favorite(collection_id, db: Session = Depends(get_db)):
    favorite_collection = db.query(models.Favorites).filter(models.Favorites.collection_id).delete(synchronize_session=False)
    return 'done'
    