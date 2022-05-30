from fastapi import FastAPI

app = FastAPI()

# machine learning end points

@app.get('/')
def index():
    return {'Hello' : 'World !'}

@app.get('/price/floor')
def read_floor_price():
    pass

@app.get('/price/max')
def read_max_price():
    pass

@app.get('/price/avg')
def read_vg_price():
    pass

@app.get('/sales')
def read_sales():
    pass

# favorites 

@app.get('/favorites/{user_id}')
def read_favorites():
    pass

@app.post('/favorites/{user_id}')
def add_favorites():
    pass

@app.delete('/favorites/{user_id}')
def delete_favorites():
    pass
