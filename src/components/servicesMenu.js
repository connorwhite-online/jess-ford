import React from 'react'
import { Link } from 'react-router-dom'

export default function servicesMenu() {
  return (
    <div className="servicesMenu">
        <Link className="serviceLink" to="/services/fertility"></Link>
        <Link className="serviceLink" to="/services/pregnancy"></Link>
        <Link className="serviceLink" to="/services/birth-support"></Link>
        <Link className="serviceLink" to="/services/perinatal-loss"></Link>
    </div>
  )
}