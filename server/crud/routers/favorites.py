from fastapi import APIRouter

router = APIRouter(
    prefix="/favorites",
    tags=["favorites"]
)

@router.post('/')
def add_favorite():
    pass

@router.delete('/')
def remove_favorite():
    pass

@router.get('/{id}')
def get_user_favorites():
    pass