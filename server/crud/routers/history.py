from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

from .. import schemas, models, hashing
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

# @router.get('/{id}')
# def get_user_history():
#     pass

# @router.put('/{id}')
# def update_time():
#     pass
