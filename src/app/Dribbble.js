import React, { Component } from 'react';
import logo from './logo.svg';
import './Dribbble.scss';

class Dribbble extends Component {
  render() {
    return (
      <div className="Dribbble">
        <div className="Dribbble-header">
          <img src={logo} className="Dribbble-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Dribbble-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Dribbble;
