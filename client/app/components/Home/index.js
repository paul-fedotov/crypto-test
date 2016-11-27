// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

export default class Home extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-lg-4 col-md-offset-3 col-lg-offset-4">
              <form className="form-auth ">
                <h2>Log In</h2>
                <p className="text-warning"></p>
                <input type="username" placeholder="Username" className="form-control"/><br />
                <input type="password" placeholder="Password" className="form-control"/><br />
                <input type="submit" value="Log in" className="btn btn-primary" />
                <span>  </span>
                <Link to='/tests' className="btn btn-default">Exit</Link>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
