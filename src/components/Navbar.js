import React from 'react';
// import Login from './Login';
import './navbar.css';
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
      <div className="container">
<div className='navbar'>
<div className="logo">
    Kuizlo
</div>
<div className="ul">
    <ul>
        <li>Home </li>
        <hr />
       
        <li>Homework Help</li>
        <hr />
        <li>For Educators</li>
    </ul>
</div>
<div className="buttons">
    <Link to="/Login" className="btnL">
     Login
    </Link>
    <button className="btnJ">
        Join
        </button>
</div>
    </div>
      </div>
    
  )
}
