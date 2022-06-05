import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'

import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Home")

  const changeTab = (tab_name) => {
    setActiveTab(tab_name);
  };

  return (
    <div className='Sidebar'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        <div className={activeTab == 'Home' ? "active-sidebar-tab" : "sidebar-tab"} onClick={() => changeTab('Home')}>
          <HomeIcon /><p>Home</p>
        </div>
      </Link>

      <Link to={'/profile'} style={{ textDecoration: 'none', color: 'white' }}>
        <div className={activeTab == 'Profile' ? "active-sidebar-tab" : "sidebar-tab"} onClick={() => changeTab('Profile')}>
          <PersonIcon /><p>Profile</p>
        </div>
      </Link>

      <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }}>
        <div className={activeTab == 'History' ? "active-sidebar-tab" : "sidebar-tab"} onClick={() => changeTab('History')}>
          <HistoryIcon /><p>History</p>
        </div>
      </Link>

      <Link to={'/favorite'} style={{ textDecoration: 'none', color: 'white' }}>
        <div className={activeTab == 'Favorite' ? "active-sidebar-tab" : "sidebar-tab"} onClick={() => changeTab('Favorite')}>
          <FavoriteIcon /><p>Favorite</p>
        </div>
      </Link>

      <div className='log-out'>
        <LogoutIcon />
        <p>Log out</p>
      </div>
    </div>
  )
}

export default Sidebar