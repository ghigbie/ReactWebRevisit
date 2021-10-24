import React, { Component } from 'react';

export default class AddOption extends Component {
    constructor(props){
        super(props);
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        if(option){
            this.props.handleAddOption(option);
            e.target.elements.option.value = '';
        }
    }


  render() {
    return (
      <form onSubmit={this.handleAddOption}> 
        <input type="text" name="option"/>
        <input type="submit" value="Add Option" placeholder="Add option"/>
      </form>
    );
  }
}
