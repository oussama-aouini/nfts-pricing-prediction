import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import CardList from '../components/CardList'
import '../App.css'

function Home() {
  return (
    <div>
        <Topbar />
        <div className='app-page'>
            <Sidebar />
            <CardList />
        </div>
    </div>
  )
}

export default Home