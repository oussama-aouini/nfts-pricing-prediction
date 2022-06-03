from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

from .. import schemas, models, hashing
from ..database import get_db

router = APIRouter(
    prefix="/favorites",
    tags=["favorites"]
)

@router.post('/')
def add_favorite(request: schemas.Favorite, db: Session = Depends(get_db)):
    new_favorite = models.Favorite(**request.dict())
    db.add(new_favorite)
    db.commit()
    db.refresh(new_favorite)
    return new_favorite

@router.delete('/{id}')
def remove_favorite(id, db: Session = Depends(get_db)):
    collection = db.query(models.Favorite).filter(models.Favorite.id == id)
    if not collection.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Collection with id {id} not found")
    collection.delete(synchronize_session=False)
    db.commit()
    return 'done'

# @router.get('/{id}')
# def get_user_favorites(id, db: Session = Depends(get_db)):
#     collection = db.query(models.Favorite).filter(models.Favorite.id == id).first()
#     if not collection:
#         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Collection with id {id} is not available')
#     return collection