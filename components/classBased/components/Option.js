import React, { Component } from 'react';

export default class Option extends Component {
  render() {
    const {optionText} = this.props;

    return (
      <p>{optionText}</p>
    );
  }
}
