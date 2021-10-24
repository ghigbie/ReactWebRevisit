import React, { Component } from 'react';

export default class Action extends Component {
  render() {
    const {hasOptions, handlePick} = this.props;

    return (
      <button 
        disabled={!hasOptions}
        onClick={handlePick}>
        What should I do?
    </button>
    );
  }
}

