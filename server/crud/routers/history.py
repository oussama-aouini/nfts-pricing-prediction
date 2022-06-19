from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

from .. import schemas, models, hashing, oauth2
from ..database import get_db

router = APIRouter(
    prefix="/history",
    tags=["history"]
)

@router.post('/')
def add_to_history(request: schemas.History, db: Session = Depends(get_db)):
    new_collection = models.History(**request.dict())
    db.add(new_collection)
    db.commit()
    db.refresh(new_collection)
    return new_collection

@router.get('/{user_id}')
def get_user_history(user_id, current_user: schemas.User = Depends(oauth2.get_current_user)):
    return 'done'

# @router.put('/{id}')
# def update_time():
#     pass
