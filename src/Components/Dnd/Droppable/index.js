import React, { Component } from 'react'
import './index.css'


export default class Droppable extends Component {

    drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        e.target.appendChild(document.getElementById(data));
    }

    allowDrop = (e) => {
        e.preventDefault();

    }


    render() {
        return (
            <div className="droppable" id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
                {this.props.children}
            </div>
        )
    }
}
