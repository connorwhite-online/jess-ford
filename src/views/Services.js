import React from 'react'
import { Routes, Router, Link } from 'react-router-dom'
import servicesMenu from '../components/servicesMenu'


//Submenu Import
import Fertility from './Fertility'
import PerinatalLoss from './PerinatalLoss'
import BirthSupport from './BirthSupport'
import Pregnancy from './Pregnancy'

export default function Services() {
  return (
    <div className="services">
      <servicesMenu /> 

      <Routes>
        <Route path="fertility" element={<Fertility />} />
        <Route path="pregnancy" element={<Pregnancy />} />
        <Route path="birth-support" element={<BirthSupport />} />
        <Route path="perinatal-loss" element={<PerinatalLoss />} />
      </Routes>

    </div>
  )
}
