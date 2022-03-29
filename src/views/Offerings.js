import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

//Submenu Import
import Fertility from './Fertility'
import PerinatalLoss from './PerinatalLoss'
import BirthSupport from './ArtTherapy'
import Pregnancy from './Pregnancy'

export default function Offerings() {
  return (
    <div className="offerings">

      <Routes>
        <Route path="fertility" element={<Fertility />} />
        <Route path="pregnancy" element={<Pregnancy />} />
        <Route path="birth-support" element={<BirthSupport />} />
        <Route path="perinatal-loss" element={<PerinatalLoss />} />
      </Routes>

    </div>
  )
}
