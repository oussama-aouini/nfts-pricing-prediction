import './Card.css'

function Card({collection}) {
  return (
    <div className='Card'>
        <img src={collection.data.avatar} alt={collection.data.collection} />
        <p className='collection-name'>{collection.data.collection}</p>
    </div>
  )
}

export default Card