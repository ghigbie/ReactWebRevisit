import React, { Component } from 'react';

export default class AddOption extends Component {
    handleAddOption = (e) => {
        e.preventDefault();
        const optionToAdd = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(optionToAdd);
        e.target.elements.option.value = '';
    }


  render() {
    return (
      <form onSubmit={this.handleAddOption}> 
        <input type="text" name="option" placeholder="Add option text here"/>
        <input type="submit" value="Add Option" />
      </form>
    );
  }
}
