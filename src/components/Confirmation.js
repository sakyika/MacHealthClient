import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Confirmation extends Component {

    componentDidMount() {
        this.props.signout();
    }
    
    render() {

        return (
            <div><h5>Please check your email to confirm registration.</h5></div>
        );
    }
}
  
export default connect(null, actions)(Confirmation);