from fastapi import APIRouter

router = APIRouter(
    prefix="/history",
    tags=["history"]
)

@router.post('/')
def add_to_history():
    pass

@router.get('/{id}')
def get_user_history():
    pass

@router.put('/{id}')
def update_time():
    pass
