import React, { Component } from 'react'
import Option from './Option';
import RemoveAll from './RemoveAll';

export default class Options extends Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveOption = this.handleRemoveOption(this);
        this.state = {
            options: [],
        }
    }

    handleRemoveAll(){
        this.setState(() => ({...this.state, options: []}))
    }

    handleRemoveOption(optionText){
       this.setState(() => ({
           ...this.state,
           options: this.state.options.filter(option => option !== optionText)
       }));
    }

    componentDidMount(){
       this.setState(() => {
           return {
               ...this.state,
               options: this.props.options
           }
       })
    }

    render() {

        return (
            <div>
                Options Component
                {this.state.options.map((option) => (
                    <Option 
                        key={option} 
                        handleRemoveOption={this.handleRemoveOption}
                        optionText={option}
                    />
                ))}
                <RemoveAll handleRemoveAll={this.handleRemoveAll} />
            </div>
        )
    }
}
