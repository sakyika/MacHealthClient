import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Signout extends Component {

    componentDidMount() {
        this.props.signout();
    }

    gotoDashboard = () => console.log("*****");
    
    render() {

        return (
            <div><h5>Logged out...</h5></div>
        );
    }
}
  
export default connect(null, actions)(Signout);