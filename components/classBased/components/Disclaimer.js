import React, { Component } from 'react'

export default class Disclaimer extends Component {
    render() {
        const {disclaimerText} = this.props
        return (
            <div>
                <span>*</span>
                {disclaimerText}
            </div>
        )
    }
}
