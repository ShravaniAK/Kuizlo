
import React from 'react';
import './navbar.css'
import './phone.css'

export const Navbar = () => {

  // const [isNavExpanded, setIsNavExpanded] = useState(false)


  return (


    <div className="container" >
      <div className='navbar'>
        <div className="logo">
          Kuizlo
        </div>

        {/* <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        hamburger svg code...
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      > */}


        <div className="ul">
          <ul>
            <a href='#'> <li>Home </li></a>
            <hr />
            <a href='#'> <li>Homework Help </li></a>

            <hr />
            <a href='#'> <li>For Educators</li></a>

          </ul>
        </div>
        <div className="buttons">
          <a href='#'> <button className="btnL">
            Login
          </button></a>
          <a href='#'><button className="btnJ">
            Join
          </button></a>
        </div>
      </div>

      <div className="mobile-navbar-btn">
      <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
      <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
         </div>



    </div>







  )


}


