import React, { Component } from 'react';

export default class Option extends Component {
  render() {
    const {optionText, handleRemoveOption} = this.props;

    return (
      <p>
        {optionText}
        <button onClick={() => handleRemoveOption(optionText)}>No Thanks!</button>
    </p>
    );
  }
}
