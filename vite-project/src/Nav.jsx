import React from 'react'
import "./index.css"
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
  <div className='parent'>
  <div className="img">
    <img src="images/Nike-Logo.png" alt="" height="40px"/></div>

    <div className='nav'>
      <ul>
      <li><a href=""><Link to={'/'}>HOME</Link></a></li>
      <li><a href=""><Link to={'/Menu'}>MENU</Link></a></li>
      <li><a href=""><Link to={'/Location'}>LOCATION</Link></a></li>
      <li><a href=""><Link to={'/About'}>ABOUT</Link></a></li>
      <li><a href=""><Link to={'/Contact'}>CONTACT</Link></a></li>
      </ul>
    </div>
    <div className="btn">
    <Button variant="contained" color="error">LOGIN</Button></div>
    
    </div>
  )
}

export default Nav