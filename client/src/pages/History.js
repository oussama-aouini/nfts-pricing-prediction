import React from 'react'

import './History.css'

import AuthContext from '../context/UserContext'
import { useContext } from 'react'

const History = () => {
  const {auth} = useContext(AuthContext)

  return (
    <div className="history-page">
      <h1>History Page</h1>
    </div>
  )
}

export default History