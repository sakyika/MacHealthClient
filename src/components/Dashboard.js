import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Dashboard extends Component {

    render() {

        return (
            <div><h5>Dashboard </h5></div>
        );
    }
}
  
export default requireAuth(Dashboard);