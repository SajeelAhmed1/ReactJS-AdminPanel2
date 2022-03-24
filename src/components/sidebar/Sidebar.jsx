import React from 'react'
import "./sidebar.css"
import {AccountCircle, CurrencyPound, Email, Feedback, Inventory, LineStyle,Message,ReportGmailerrorred,Timeline,TrendingUp, Work} from '@mui/icons-material';
// import { BarChart } from 'recharts';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrappe">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className='sidebarIcon' />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className='sidebarIcon' />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <AccountCircle className='sidebarIcon' />
              User
            </li>
            <li className="sidebarListItem">
              <Inventory className='sidebarIcon' />
              Product
            </li>
            <li className="sidebarListItem">
              <CurrencyPound className='sidebarIcon' />
              Transactions
            </li>
            
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Email className='sidebarIcon' />
              Mail
            </li>
            <li className="sidebarListItem">
              <Feedback className='sidebarIcon' />
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className='sidebarIcon' />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <Work className='sidebarIcon' />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className='sidebarIcon' />
              Analyics
            </li>
            <li className="sidebarListItem">
              <ReportGmailerrorred className='sidebarIcon' />
              Reports
            </li>
          </ul>
        </div>

        

        
        
      </div>
    </div>
  )
}
