import './Favorite.css'

import AuthContext from '../context/UserContext'
import { useContext } from 'react'

const Favorite = () => {
  const {auth} = useContext(AuthContext)

  return (
    <div className="favorites-page">
      <h1>Favorites Page</h1>
    </div>
  )
}

export default Favorite