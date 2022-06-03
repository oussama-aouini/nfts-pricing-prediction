# from http.client import HTTPException
# from fastapi import Depends, FastAPI, status, HTTPException

# def create_user(request: schemas.User, db: Session = Depends(get_db)):
#     hashedPassword = hashing.Hash.bcrypt(request.password)
#     new_user = models.User(username=request.username, email=request.email, password=hashedPassword,name=request.name,surname=request.surname, premium=request.premium,trials=request.trials)
#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)
#     return new_user