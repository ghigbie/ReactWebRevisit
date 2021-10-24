import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Disclaimer from './components/Disclaimer';

class IndecisionApp extends Component{
    constructor(props){
        super(props);
        // this.handleRemoveAll = this.handleRemoveAll.bind(this);
        // this.handleRemoveOption = this.handleRemoveOption.bind(this);
        // this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: [
            'Walk the dog',
            'Check the mail',
            'Do the laundry'
            ],
        }
    }

    handleAddOption = (optionToAdd) => {
        if(!optionToAdd){
            return 'Enter a valid value to add';
        }else if (this.state.options.indexOf(optionToAdd) > -1){
            return 'This option already exists. Please create another';
        }

        this.setState((prevState) => ({
            ...prevState, 
            options: [...prevState.options, optionToAdd]
        }));
    }

    handleRemoveAll = () => {
        this.setState((prevState) => ({...prevState, options: []}))
    }

    handleRemoveOption = (optionText) => {
        alert(`Sanity check ${optionText}`);
        this.setState = ((prevState) => ({
            ...prevState, 
            options: prevState.options.filter(option => (option !== optionText)),
        }))
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(`You should: ${this.state.options[randomNum]}`);
    }

    render(){
        const title = "Indecision App";
        const disclaimerText = "results may vary";

        return(
            <div>
                <Header title={title} />
                <Action 
                    hasOptions={this.state.options.length > 0 || 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
                <Disclaimer disclaimerText={disclaimerText} />
            </div>
        );
    }
}

export default IndecisionApp;