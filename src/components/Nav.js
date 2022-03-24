import React from 'react'

import { Link, Links } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <div className="menu">
        <div className="linkNames">
          <Link className="navLink" to="/About">ABOUT</Link>
          <Link className="navLink" to="/Services">SERVICES</Link>
          <Link className="navLink" to="/Testimonials">TESTIMONIALS</Link>
          <Link className="navLink" to="/Contact">CONTACT</Link>
        </div>
        <div className='menu-icon'>Info</div>
      </div> 
      <div className="logo">
        <Link to="/"><h1 className="title">JESS FORD CARE</h1></Link>
      </div> 
    </div>
  )
}

