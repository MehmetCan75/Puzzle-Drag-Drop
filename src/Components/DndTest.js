import React, { Component } from 'react'
import Draggable from '../Components/Dnd/Draggable/index'
import Droppable from '../Components/Dnd/Droppable/index'

import './Dndtest.css'

export default class DndTest extends Component {
    render() {
        return (
            <div className="dndtest">
                <Droppable id="dr1">
                    <Draggable id="item1"><div className="text">Some Text</div></Draggable>
                    <Draggable id="item2"><div className="text">Some other text</div></Draggable>
                </Droppable>
                <Droppable id="dr2">

                </Droppable>
                <Droppable id="dr3">

                </Droppable>
                <Droppable id="dr4">

                </Droppable>

            </div>
                
           
        )
    }
}
