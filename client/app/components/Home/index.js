// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar-fluref navbar-default navbar-fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#"> Chirp! </a>
              <p className="navbar-text">Crypto Test</p>
            </div>
          </nav>
          <div className="col-md-offset-2 col-md-8">
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
              <form className="form-auth " ng-submit="login()">
                <h2>Log In</h2>
                <p className="text-warning"></p>
                <input type="username" placeholder="Username" className="form-control"/><br />
                <input type="password" placeholder="Password" className="form-control"/><br />
                <input type="submit" value="Log in" className="btn btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
