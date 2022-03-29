import React from 'react'
import biopic from '../assets/images/image3.jpeg'

export default function About() {
  return (
    <div className="about">
      <div className="bio-pic">
        <img src={biopic} alt="Jess Ford" width="100%" height="auto"></img>
      </div>
      <div className="bio-text">
        <p>Jess’s approach to doula work is calm, encouraging and adaptive. She believes each experience is unique and will meet you where you are at in order to provide personalized care.
        <br/>
        You can expect transparency when working with Jess, and she will work collaboratively to find the best methods and resources that work specifically for you.  She will learn, grow and adapt alongside her clients and wants you to feel empowered and comforted the entire way.
        <br/>
        She is passionate that your reproductive journey should be cared for with just as much intent no matter the circumstance, and wants you to be in enlightened, in control of your body and informed of your choices.
        <br/>
        Born and raised in the Detroit Metro area, Jess graduated from The University Of Michigan where she received her BFA, focusing on painting and fiber art.  She began her birth doula career in 2018, expanded into full spectrum care, and is now continuing her education in perinatal loss and maternal mental health.  She is currently expecting her first child and will begin bookings July 2022.</p>
      </div>
    </div>
  )
}
