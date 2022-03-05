import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import 'react-bootstrap'
import Nav from './Nav';

// Page imports
import index from './pages';
import about from './pages';
import services from './pages';
import testimonials from './pages';
import PageNotFound from './pages';

function App() {
  return (
    < Router>
      <Switch>
      <Route exact path='/' component={index}/>;
      <Route exact path='/about' component={about}/>;
      <Route exact path='/services' component={services}/>;
      <Route exact path='/testimonials' component={testimonials}/>;
      <Route exact path="/PageNotFound" component={PageNotFound}/>;
      <Redirect to="/PageNotFound"/>
      </Switch>

    </Router>
    
  )
}

export default App;
