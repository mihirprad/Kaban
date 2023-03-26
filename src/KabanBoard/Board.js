import React, { useContext, useEffect, useState } from 'react';
import './Board.css'

import { Droppable, Draggable } from 'react-beautiful-dnd';

export default function Board({ items, boardId, title }) {
  const [boardItems, setBoardItems] = useState([]);

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
                  >
                    {item.content}
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