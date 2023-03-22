import React, { useContext, useEffect, useState } from 'react';
import './Board.css'
import DragContext from './Store/draggable-context';
import DraggableItem from './DraggableItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function Board({ items, id, title }) {
  const [dragItems, setDragItems] = useState([]);

  useEffect(() => {
    if (items != undefined)
      setDragItems([...items]);
    console.log(dragItems)
  }, [items]
  )

  let validDropTarget = false;
  let dragCtx = useContext(DragContext);


  let dragoverEvent = (event) => {
    event.preventDefault();
    if (!validDropTarget) {
      validDropTarget = true;
      event.currentTarget.classList.add("hover");
    }
  }

  let dropEvent = (event) => {
    // if (!event.currentTarget.contains(dragCtx.draggedItem)) {
    // let dropTarget = event.currentTarget;
    // console.log(dropTarget)

    // let boundingRect = dropTarget.getBoundingClientRect();
    // let offset = event.clientY - boundingRect.top;
    // let items = Array.from(dropTarget.querySelectorAll('.draggable'));

    // let insertBeforeItem = null;
    // for (let i = 0; i < items.length; i++) {
    //   let itemRect = items[i].getBoundingClientRect();
    //   if (offset < (itemRect.top + itemRect.height / 2)) {
    //     insertBeforeItem = items[i];
    //     break;
    //   }
    // }

    // if (insertBeforeItem) {
    //   dropTarget.insertBefore(dragCtx.draggedItem, insertBeforeItem);
    // } else {
    //   dropTarget.appendChild(dragCtx.draggedItem);
    // }
    event.preventDefault();
    let draggedItem = event.dataTransfer.getData("draggedItem");
    console.log(draggedItem)
    console.log(dragItems)
    setDragItems([...dragItems, draggedItem])
    validDropTarget = false;
    event.currentTarget.classList.remove("hover");
  }

  const dragLeaveEvent = (event) => {
    if (validDropTarget) {
      validDropTarget = false;
      event.currentTarget.classList.remove("hover");
    }
  }

  return (
    <div id={id} className='drop-zone board' onDragOver={dragoverEvent} onDragLeave={dragLeaveEvent} onDrop={dropEvent}>
      <h4 className='board-title'>{title}</h4>
      <Droppable droppableId={id}>
        {(provided) => {
          return (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {dragItems.map((item, index) => (
              <Draggable key={index} index = {index} draggableId = {index.toString()}>
                {(provided) => {

                  <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >{item}</li>

                }}
              </Draggable>
            ))}

          </ul>
          )

        }}
      </Droppable>


    </div>
  )
}