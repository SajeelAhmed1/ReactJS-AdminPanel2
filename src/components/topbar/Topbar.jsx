import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
          <div className='topleft'>
              <span className='logo'>DevboltAdminPanel</span>
          </div>
          <div className='topright'>
              <div className="topbarIconContainer">
              <NotificationsNone/>
              <span className="topIconBadge">2</span>
              </div>

              <div className="topbarIconContainer">
                  <Language/>
              
              </div>
          
          
              <div className="topbarIconContainer">
                  <Settings/>
              </div>
              <img src="https://images.unsplash.com/photo-1646736009298-202d1dba28dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="user" className="topAvatar" />
          </div>
          
              
          
        </div>
    </div>
  )
}
