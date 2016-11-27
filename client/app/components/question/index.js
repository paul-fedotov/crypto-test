// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';

export default class Question extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Link to='/'>form</Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">2</div>
          </div>
        </div>
    );
  }
}
