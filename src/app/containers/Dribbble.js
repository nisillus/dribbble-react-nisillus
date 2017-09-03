import React, { Component } from 'react';

import { MainHeader, MainContent } from '../components/commons/index';

class Dribbble extends Component {
  render() {
    return (
      <div className="Dribbble container rsrc-container">
        <MainHeader />
        <MainContent pageContent={ this.props.children } />
      </div>
    );
  }
}

export default Dribbble;
