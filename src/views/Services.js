import React from 'react'
import { Routes, Router, Link } from 'react-router-dom'
import servicesMenu from '../components/servicesMenu'

//Submenu Import
import Fertility from './Fertility'

export default function Services() {
  return (
    <div className="services">
      <servicesMenu /> 

      <Routes>
        <Route path=":id" element={<Fertility />} />
        <Route path=":id" element={<Fertility />} />
        <Route path=":id" element={<Fertility />} />
        <Route path=":id" element={<Fertility />} />
      </Routes>

    </div>
  )
}
