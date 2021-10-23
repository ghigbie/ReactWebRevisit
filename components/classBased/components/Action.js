import React, { Component } from 'react';

export default class Action extends Component {
    handlePick(){
        alert('handlePickCalled');
    }

  render() {
    const {hasOptions} = this.props;

    return (
      <button 
        disabled={!hasOptions}
        onClick={this.handlePick}>
        What should I do?
    </button>
    );
  }
}

