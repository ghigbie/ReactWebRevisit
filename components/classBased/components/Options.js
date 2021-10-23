import React, { Component } from 'react'
import Option from './Option';

export default class Options extends Component {
    handleRemoveAll(){
        alert('hadleRemoveAll all called...meow');
    }

    render() {
        const {options} = this.props;

        return (
            <div>
                Options Component
                {options.map((option) => (<Option key={option} optionText={option}/>))}
                <button onClick={this.handleRemoveAll}>Remove All</button>
            </div>
        )
    }
}
