import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './home.js'
import About from './about.js'
import Login from './login.js'
import Navbar from './navbar.js'

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route path='/' component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>,
  document.getElementById('root')
);
