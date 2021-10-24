import React, { Component } from 'react';

export default class RemoveAll extends Component {
  render() {
    const {handleRemoveAll, hasOptions} = this.props;
    return (
        <button
            disabled={!hasOptions}
            onClick={handleRemoveAll}> 
            Remove All
        </button>
    );
  }
}
