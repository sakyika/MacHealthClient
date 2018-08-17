import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Register extends Component {

    gotoSignin = () => this.props.history.push('/signin');

    handleSubmit({ email, password }) {
        this.props.signup({ email, password }, this.gotoSignin);
    }
    
    render() {

        const { handleSubmit } = this.props;

        return (
            <div>
            <h1>Register</h1>
            <form onSubmit={ handleSubmit(this.handleSubmit.bind(this)) } >
                <fieldset className="form-group">
                <label>Email</label>
                <Field
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                />
                </fieldset>
                <fieldset className="form-group">
                <label>Password</label>
                <Field
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    className="form-control"
                />
                </fieldset>
                {/*<div>{this.props.errorMessage}</div>*/}
                <br />
                <button action="submit" className="btn btn-primary">Register</button>
            </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}
  
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ 
        form: 'signin', 
        fields: ['email', 'password'] 
    })) (Register);