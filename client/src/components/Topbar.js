import React from 'react'
import Searchbar from './Searchbar'

import logo from '../assets/logo.png'

import './Topbar.css'

function Topbar() {
  return (
    <div className='Topbar'>
      <img src={logo} />
        <Searchbar />
    </div>
  )
}

export default Topbar