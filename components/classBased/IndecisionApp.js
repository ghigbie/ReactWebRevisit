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
        this.setState((prevState) => ({
            ...prevState, 
            options: [...prevState.options, optionToAdd]
        }));
    }

    handleRemoveAll = () =>{
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
        const disclaimerText = "results may vary depending on your computer";

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
                <AddOption/>
                <Disclaimer disclaimerText={disclaimerText} />
            </div>
        );
    }
}

export default IndecisionApp;