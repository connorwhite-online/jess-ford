import React from 'react'

import { Link, Links } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Link to="/">Jess Ford Care</Link>
      <Link to="/About">About</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Testimonials">Testimonials</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  )
}

