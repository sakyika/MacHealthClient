import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions';

import Header from './Header';
import Signin from './Signin';

const Dashboard = () => <h2>Dashboard</h2>
const Signout = () => <h2>Signout</h2>
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
