import React, { Component } from 'react';

export default class Action extends Component {
    handlePick(){
        alert('handlePickCalled');
    }

  render() {
    return (
      <button onClick={this.handlePick}>What should I do?</button>
    );
  }
}

