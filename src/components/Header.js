import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Header extends Component {

    signOut = () => {
        this.props.signin();
    }

    renderLinks() {
        
        if(this.props.authenticated) {
            return (
                <Link to="/signout">Sign out</Link>
            );
        } else {
            return (
                <Link to="/signin">Sign in</Link>
            );
        }
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                <Link to="/" className="navbar-brand" >McMaster Health</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        { this.renderLinks() }
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToprops({ auth }) {
    return { authenticated: auth.authenticated }
}

export default connect(mapStateToprops)(Header);