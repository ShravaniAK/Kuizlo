import React from 'react'
import { Navbar } from './Navbar';
import './home.css'

export const Home = () => {
  return (
    <div className='home'>
<div className="navbar">
<Navbar/>
</div>
<div className="main">
    <div className="left">
<div className="search">
    <img className='searchL' src="img/search_FILL0_wght400_GRAD0_opsz48 1.png" alt="" />
    <p>Get connected to an expert now</p>
</div>

<div className="left-down">
    <img className='left-down-img' src="img/Vector.png" alt="" />
    <h2>fastest Q&A</h2>
    <p>platform in the <br />
world !</p>
<button className="getstarted">GET STARTED
<img className='go' src="img/Line 10.png" alt="" />
</button>
</div>

    </div>
    <div className="right">
<img className='lamp' src="img/ceiling-lamp 2.png" alt="" />
<img className='frame' src="img/Frame.png" alt="" />
    </div>
</div>
    </div>
  )
}
