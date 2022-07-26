import React, { useState } from 'react'

import './History.css'

import AuthContext from '../context/UserContext'
import { useContext } from 'react'

const History = () => {
  const {auth} = useContext(AuthContext)
  const [hide, setHide] = useState(true)

  const func = (e) => {
   
      setHide(false)
    
  }

  return (
    <div className="history-page">
      <div className="history-list">
        <div className="hist-element">
          <img src={"https://arweave.net/YqCc0gtqmXaQoiMSuu6YAEpqqJ9kPXDmSFn638zSaSw"} alt="" />
          <div className='description'>
            <h1>Trippin' Ape Tribe</h1>
            <h2>19:35</h2>
          </div>
        </div>
        {hide?<div className="hist-element">
          <img src={"https://bafybeid5tl6bnlvkdq3h5jb6tgwozydona6is3rtbtlq2tmesnjamlcknm.ipfs.nftstorage.link/6718.png?ext=png"} alt="" />
          <div className='description'>
            <h1>Okay Bears</h1>
            <h2>15:35</h2>
          </div>
        </div> :""}
        {hide?<div className="hist-element">
          <img src={"https://metadata.degods.com/g/8532.png"} alt="" />
          <div className='description'>
            <h1>DeGods</h1>
            <h2>11:35</h2>
          </div>
        </div>:""}
      </div>
      <div className="hist-options">
        <h1>Filters</h1>
        <div className="filters">
        <h2>Name</h2>
        <input onChange={(e) => func(e)} />
        <h2>Time</h2>
        <div className="time-options">
          <div className="time-filter"><div className='selected-filter'></div>Today</div>
          <div className="time-filter">Yesterday</div>
          <div className="time-filter">Last Week</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default History