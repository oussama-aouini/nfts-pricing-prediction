import FavoriteIcon from '@mui/icons-material/Favorite';

import './Favorite.css'

import AuthContext from '../context/UserContext'
import { useContext, useState } from 'react'

const Favorite = () => {
  const {auth} = useContext(AuthContext)
  const [liked, setLiked] = useState(true) 

  return (
    <div className="favorites-page">
      {liked? <div className="fav-card">
        <img src={"https://arweave.net/YqCc0gtqmXaQoiMSuu6YAEpqqJ9kPXDmSFn638zSaSw"} alt="" />
        <div className="fav-card-desc">
          <p>Trippin' Ape Tribe</p>
          <div className="fav-btn" onClick={() => setLiked(false) }>
            <FavoriteIcon fontSize="large" />
          </div>
        </div>
      </div> : ""}
      <div className="fav-card">
        <img src={"https://bafybeigw7q4q2tn7ue3eqxhwt5xzohosi3mgyareqxfyfy6pftmrcxql7i.ipfs.dweb.link/1456.png?ext=png"} alt="" />
        <div className="fav-card-desc">
          <p>Vaxxed Doggos</p>
          <div className="fav-btn">
            <FavoriteIcon fontSize="large" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favorite