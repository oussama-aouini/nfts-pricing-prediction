import './Profile.css'

import solscan from '../assets/solscan.png'

const Profile = () => {
  return (
    <div className="profile">
      <div className="comp1">
        <img src={"https://arweave.net/YqCc0gtqmXaQoiMSuu6YAEpqqJ9kPXDmSFn638zSaSw"} />
          <h2>username</h2>
          <h3>Name Surname</h3>
          <p>email@adress.com</p>
      </div>
      <div className="comp-container">
        <div className="comp2">
          <h2>subscritbtion: premium/ Basic</h2>
          <h3>Daily trials = 3</h3>
        </div>
        <div className="comp3">
          <p>Powered by SolScan</p>
          <a href='https://solscan.io/'>
          <img src={solscan} alt="solscan logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Profile