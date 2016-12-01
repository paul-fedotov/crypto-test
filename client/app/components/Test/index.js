// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css'

export default class Test extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Questions</td>
                    <td>Start</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Questions</td>
                    <td>Bason's test</td>
                    <td>10</td>
                    <td>
                      <Link to='/tests/1/questions/1' className="btn btn-success">Start</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}
