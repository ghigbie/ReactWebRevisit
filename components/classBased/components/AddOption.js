import React, { Component } from 'react';

export default class AddOption extends Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        option && alert(option);
    }


  render() {
    return (
      <form onSubmit={this.handleAddOption}> 
        <input type="text" name="option"/>
        <input type="submit" value="Add Option"/>
      </form>
    );
  }
}
