import React from 'react'
import './Card.css'

function Card({movie}) {
  return (
    <div className='Card'>
        <img src={movie.data.avatar} />
        <h2 className='collection-name'>{movie.data.collection}</h2>
    </div>
  )
}

export default Card