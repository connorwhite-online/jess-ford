import React from 'react';

import { BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';

import 'react-bootstrap';

// Page imports
import Home from './Home';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
// import PageNotFound from './PageNotFound';
import Nav from './Nav';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="content">
          <Routes>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/testimonials'>
              <Testimonials />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
