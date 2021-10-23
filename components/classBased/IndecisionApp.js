import React, { Component } from 'react';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Disclaimer from './components/Disclaimer';

class IndecisionApp extends Component{
    render(){
        const title = "Indecion App";
        const disclaimerText = "results may vary";
        const options = [
            'Walk the dog',
            'Check the mail',
            'Do the laundry'
        ];

        return(
            <div>
                <Header title={title} />
                <Action />
                <Options options={options}/>
                <AddOption/>
                <Disclaimer disclaimerText={disclaimerText} />
            </div>
        );
    }
}

export default IndecisionApp;