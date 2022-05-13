import React from 'react'
import Card from './Card'
import './CardList.css'

function CardList({movies}) {
  return (
    <div className='CardList'>
        {
          movies.map((movie) =>(
            <Card movie={movie} />
          ))
        }
    </div>
  )
}

export default CardList