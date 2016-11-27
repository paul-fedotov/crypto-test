// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Questions extends Component {
  render() {
    return (
      <div>
      	<div>Test 1</div>
      	<div>
      		<Link to='/tests/1/questions/1'>1</Link>
      		<Link to='/tests/1/questions/2'>2</Link>
      	</div>
      	{this.props.children}
      </div>
    );
  }
}
