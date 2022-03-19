import React from 'react'
import { Link } from 'react-router-dom'

export default function servicesMenu() {
  return (
    <div className="servicesMenu">
        <Link className="serviceLink" to="/services/fertility">fertility</Link>
        <Link className="serviceLink" to="/services/pregnancy">pregnancy</Link>
        <Link className="serviceLink" to="/services/birth-support">birth support</Link>
        <Link className="serviceLink" to="/services/perinatal-loss">perinatal loss</Link>
    </div>
  )
}