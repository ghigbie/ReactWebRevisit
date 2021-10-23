import React, { Component } from 'react';

export default class RemoveAll extends Component {
  render() {
    const {handleRemoveAll} = this.props;
    return (
      <button onClick={handleRemoveAll}> Remove All</button>
    );
  }
}
