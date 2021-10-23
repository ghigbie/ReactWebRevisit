import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Disclaimer from './components/Disclaimer';

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state.options = [
            'Walk the dog',
            'Check the mail',
            'Do the laundry'
        ]
    }

    handleRemoveAll(){
        this.setState(() => ({...this.state, options: []}))
    }

    handleRemoveOption(optionText){
        this.setState = ((prevState) => ({
            ...this.state, 
            options: prevState.options.filter(option => (option !== optionText)),
        }))
    }

    render(){
        const title = "Indecion App";
        const disclaimerText = "results may vary";

        return(
            <div>
                <Header title={title} />
                <Action hasOptions={this.state.options.length > 0 || 0}/>
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption/>
                <Disclaimer disclaimerText={disclaimerText} />
            </div>
        );
    }
}

export default IndecisionApp;