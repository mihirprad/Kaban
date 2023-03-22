import React, { useState } from "react";
import ToDoBoard from './ToDoBoard'
import InProgressBoard from "./InProgressBoard";
import DragContext from './Store/draggable-context'
import './KabanBoard.css';
import { DragDropContext } from "react-beautiful-dnd";
export default function KabanBoard() {

    const [draggedItem, setDraggedItem] = useState(null);
    let DragState = { draggedItem, setDraggedItem }
    return (<>
        <DragContext.Provider value={DragState}>
                <div id = "kaban-board">
                    <ToDoBoard />
                    <InProgressBoard />
                </div>
        </DragContext.Provider>
    </>)
}