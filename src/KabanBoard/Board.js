import React, { useContext, useEffect, useState } from 'react';
import './Board.css'

import { Droppable, Draggable } from 'react-beautiful-dnd';

export default function Board({ items, boardId, title }) {
  const [boardItems, setBoardItems] = useState([]);

  const getItemStyle = (isDragging, draggableStyle) => ({
    "background-color": "white",
    "height": "100px",
    "margin": "8px",
    "margin-top": "0px",
    "padding": "10px",
    "border": "1px solid #e3e6ea",

    // styles we need to apply on draggables
    ...draggableStyle
  });

  useEffect(() => {
    if (items != undefined)
      setBoardItems([...items]);

  }, [items]
  )

  return (
    <div id={boardId} className='board'>
      <h4 className='board-title'>{title}</h4>
      <Droppable droppableId={boardId} >
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="drop-zone">
            {boardItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style ={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                    
                  >
                    <div className = "to-do-item">
                    {item.content}

                    </div>


                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}