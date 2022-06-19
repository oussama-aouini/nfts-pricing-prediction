import React from 'react'

import './History.css'

import AuthContext from '../context/UserContext'
import { useContext } from 'react'

const History = () => {
  const {auth} = useContext(AuthContext)

  return (
    <div className="history-page">
      <div className="history-list">
        <div className="hist-element">
          <img src={"https://arweave.net/YqCc0gtqmXaQoiMSuu6YAEpqqJ9kPXDmSFn638zSaSw"} alt="" />
          <div className='description'>
            <h1>Collection Title</h1>
            <h2>Last Seen</h2>
          </div>
        </div>
        <div className="hist-element">
          
        </div>
        <div className="hist-element">
          
        </div>
      </div>
      <div className="hist-options">
        <h1>Filters</h1>
        <div className="options">
          <div className='option'><input type="radio" value={"All"} /> All Time</div>
          <div className='option'><input type="radio" value={"All"} /> Today</div>
          <div className='option'><input type="radio" value={"All"} /> This Week</div>
          <div className='option'><input type="radio" value={"All"} /> This Month</div>
        </div>
      </div>
    </div>
  )
}

export default History