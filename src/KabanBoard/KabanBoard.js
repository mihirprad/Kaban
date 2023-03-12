import React, { useState } from "react";
import ToDo from './ToDo'
import InProgressBoard from "./InProgressBoard";
import DragContext from './Store/draggable-context'
import './KabanBoard.css'
export default function KabanBoard() {

    const [draggedItem, setDraggedItem] = useState(null);
    let DragState = { draggedItem, setDraggedItem }
    return (<>
        <DragContext.Provider value={DragState}>
            <div id = "kaban-board">
                <ToDo />
                <InProgressBoard />
            </div>
        </DragContext.Provider>
    </>)
}