import React, { Component } from 'react';

import { MainHeader } from '../components/commons/index';

class Dribbble extends Component {
  render() {
    return (
      <div className="Dribbble container rsrc-container">
        <MainHeader />
        <p className="Dribbble-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Dribbble;
