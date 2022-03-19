import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

// Component imports
import Nav from './components/Nav';

// Page imports
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import Testimonials from './views/Testimonials';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="content">
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/services/fertility' element={<Fertility />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
