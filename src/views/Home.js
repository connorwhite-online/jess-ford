import React from 'react'
import shadows from '../assets/images/shadows.jpeg'

export default function Home() {
  return (
    <div className="home">
      <h2 className="lpTitle">full spectrum doula</h2>
      <div className="hero">
        <img className="hero-img" src={shadows}></img>
      </div>
    </div>
  )
}
