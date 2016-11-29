// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar-fluref navbar-default navbar-fixed-top">
            <div className="container">
              <a className="navbar-brand"> Logo </a>
              <p className="navbar-text">Crypto Test</p>
              <Link className="navbar-text" to='/'>Logout</Link>
            </div>
          </nav>
          <div className="col-md-offset-2 col-md-8">
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
