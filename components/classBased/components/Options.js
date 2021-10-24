import React, { Component } from 'react'
import Option from './Option';
import RemoveAll from './RemoveAll';

export default class Options extends Component {
    render() {
        const {options, handleRemoveAll, handleRemoveOption} = this.props;

        return (
            <div>
                Options Component
                {options.map((option) => (
                    <Option 
                        key={option} 
                        handleRemoveOption={handleRemoveOption}
                        optionText={option}
                    />
                ))}
                <RemoveAll 
                    handleRemoveAll={handleRemoveAll} 
                    hasOptions={options.length > 0 || 0 }
                />
            </div>
        )
    }
}
