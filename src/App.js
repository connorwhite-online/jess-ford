import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Component imports
import Nav from './components/Nav';

// Page imports
import Home from './views/Home';
import About from './views/About';
import Offerings from './views/Offerings';
import Testimonials from './views/Testimonials';
import Fertility from './views/Fertility';
import Pregnancy from './views/Pregnancy';
import PerinatalLoss from './views/PerinatalLoss';
import Contact from './views/Contact';
import ArtTherapy from './views/ArtTherapy';



function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/offerings' element={<Offerings />}>
              <Route path='fertility' element={<Fertility />} />
              <Route path='pregnancy' element={<Pregnancy />} />
            </Route>
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/offerings/fertility' element={<Fertility />} />
            <Route path='/offerings/pregnancy' element={<Pregnancy />} />
            <Route path='/offerings/art-therapy' element={<ArtTherapy />} />
            <Route path='/offerings/perinatal-loss' element={<PerinatalLoss />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
