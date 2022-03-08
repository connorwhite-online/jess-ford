import React from 'react'
import biopic from '../assets/images/image3.jpeg'

export default function About() {
  return (
    <div className="about">
      <div className="bio-pic">
        <img src={biopic} alt="Jess Ford" width="100%" height="auto"></img>
      </div>
    </div>
  )
}
