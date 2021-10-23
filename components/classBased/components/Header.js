import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        const {title} = this.props
        return (
            <div>
                <h1>{title}</h1>
                <h2>Put your life in the hands<span>*</span> of a computer</h2>
            </div>
        )
    }
}
