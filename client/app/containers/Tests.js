// @flow
import React, { Component } from 'react';
import Test from '../components/Test';

export default class Tests extends Component {
  render() {
    return (
      <div>
      	<div>Tests List</div>
      	<Test/>
      	{this.props.children}
      </div>
    );
  }
}
