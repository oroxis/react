
import React, { Component } from 'react'

export default class Button2 extends Component {
    render(props) {
        return (
            <button>
               {this.props.text}
            </button>
        )
    }
}
