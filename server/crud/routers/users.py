from fastapi import APIRouter

router = APIRouter(
    prefix="/user",
    tags=["user"]
)

@router.post('/')
def add_user():
    pass

@router.get('/{id}')
def get_user():
    pass

@router.put('/{id}')
def update_user():
    pass

@router.delete('/{id}')
def remove_user():
    pass