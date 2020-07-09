import React, { Component } from 'react'

export default class Draggable extends Component {

    drag = (e) => {
        e.dataTransfer.setData('transfer', e.target.id);
    }

    noAllowDrop = (e) => {
        e.stopPropagation()
    }

    render() {
        return (
            <div className="draggable" id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.noAllowDrop}>
                {this.props.children}
            </div>
        )
    }
}
