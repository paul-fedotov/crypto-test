// @flow
import React, { Component, PropTypes } from 'react';

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
