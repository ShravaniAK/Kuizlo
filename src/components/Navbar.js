import React from 'react';
import './navbar.css'

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
    <button className="btnL">
Login
    </button>
    <button className="btnJ">
        Join
        </button>
</div>
    </div>
      </div>
    
  )
}
