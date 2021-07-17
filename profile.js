import React, { Component } from 'react'

export default class profile extends Component {
    render(props) {
        return (
            <div>
                <h1> Name: {this.props.mProfile.name}</h1>
                <p>Gender: {this.props.mProfile.gender}</p>
                <p>Age: {this.props.mProfile.age}</p>
            </div>
        )
    }
}
