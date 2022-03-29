import React from 'react'

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <div className="menu">
        <div className="linkNames">
          <Link className="navLink" to="/About">ABOUT</Link>
          <Link className="navLink" to="/Services" hasSubItem>SERVICES</Link>
          <Link className="navLink" to="/Testimonials">TESTIMONIALS</Link>
          <Link className="navLink" to="/Contact">CONTACT</Link>
        </div>
        <div className='menu-icon'>Info</div>
      </div> 
      <div className="logo">
        <Link to="/"><h1 className="title">JESS FORD CARE</h1></Link>
      </div>
      <div className="contact">
        
      </div>
    </div>
  )
}

