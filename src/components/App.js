import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Register from './Register';
import Confirmation from './Confirmation';
import Signin from './Signin';
import Signout from './Signout';
import Dashboard from './Dashboard';
const Landing = () => <h2>Landing</h2>

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route path="/" exact component={ Landing } />
              <Route path="/register" component={ Register } />
              <Route path="/confirmation" component={ Confirmation } />
              <Route path="/signin" component={ Signin } />
              <Route path="/signout" component={ Signout } />
              <Route path="/dashboard" component={ Dashboard } />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
