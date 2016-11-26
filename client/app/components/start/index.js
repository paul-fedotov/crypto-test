// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.css';


export default class Start extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>start</h2>
          <Link to="/question/1">to Counter</Link>
        </div>
      </div>
    );
  }
}
