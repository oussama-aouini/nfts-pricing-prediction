from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from .database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = 'users' 

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    name = Column(String)
    surname = Column(String)
    premium = Column(Boolean, default=False)
    trials = Column(Integer, default=0)
    photo = Column(String) 

    favorites = relationship('Favorite', back_populates='users')
    history = relationship('History', back_populates='users')

class Favorite(Base):
    __tablename__ = 'favorite_collections'

    id = Column(Integer, primary_key=True, index=True)
    collection_id = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))

    users = relationship('User', back_populates='favorites')

class History(Base):
    __tablename__ = 'prediction_history'
    
    id = Column(Integer, primary_key=True, index=True)
    collection_id = Column(String)
    time = Column(Integer)
    user_id = Column(Integer, ForeignKey('users.id'))

    users = relationship('User', back_populates='history')