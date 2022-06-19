import './Profile.css'

import solscan from '../assets/solscan.png'

import AuthContext from '../context/UserContext'
import { useContext } from 'react'

const Profile = () => {
  const {auth} = useContext(AuthContext)
  console.log(auth)
  return (
    <div className="profile">
      <div className="comp1">
        <img src={"https://arweave.net/YqCc0gtqmXaQoiMSuu6YAEpqqJ9kPXDmSFn638zSaSw"} />
          <h2>{auth.username}</h2>
          <h3>{auth.name} {auth.surname}</h3>
          <p>{auth.email}</p>
      </div>
      <div className="comp-container">
        <div className="comp2">
          <h2>Subscritbtion: Basic</h2>
          <h3>Daily trials: 3</h3>
        </div>
        <div className="comp3">
          <p>Powered by SolScan</p>
          <a href='https://solscan.io/'>
          <img src={solscan} alt="solscan logo" />
          </a>
          <button onClick={() => alert('u sure bro')}>Delete account</button>
        </div>
      </div>
    </div>
  )
}

export default Profile