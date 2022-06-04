import React from 'react'
import './Sidebar.css'
import {SidebarData} from './SidebarData'
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link
              }}
            >
              <div id='icon'>{val.icon}</div>
              <div id='title'>{val.title}</div>
            </li>
          )
        })}
      </ul>
      <div className='log-out'>
        <LogoutIcon />
        <p>Log out</p>
      </div>
    </div>
  )
}

export default Sidebar