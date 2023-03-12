import React, {useContext} from "react";
import DragContext from "./Store/draggable-context";
export default function DraggableItem({ index, item, classAttr }) {

    const dragCtx = useContext(DragContext);
    const dragStart = (event) => {
        dragCtx.setDraggedItem(event.currentTarget)
    }
    let className = "draggable ";

    if (classAttr != undefined) {
        className += classAttr;
    }
    return (
        <div key={index} className={className} draggable="true" onDragStart={dragStart}>{item}</div>
    )
}