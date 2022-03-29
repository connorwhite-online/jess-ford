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



function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/offerings' element={<Offerings />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/offerings/fertility' element={<Fertility />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
