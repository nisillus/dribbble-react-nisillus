import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    return (
      <div className="Dribbble-content row rsrc-content">
        { this.props.pageContent }
      </div>
    );
  }
}

export default MainContent;