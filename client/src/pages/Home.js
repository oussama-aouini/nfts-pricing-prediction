import React from 'react'

import CardList from '../components/CardList'

import './Home.css'

function Home({collections}) {

  return (
    <div className='home'>
      <CardList collections={collections} />
    </div>
  )
}

export default Home