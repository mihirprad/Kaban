import React, { useContext, useEffect, useState } from 'react';
import './Board.css'
import ToDoModalContext from './Store/to-do-modal-context';
import { Droppable, Draggable } from 'react-beautiful-dnd';

export default function Board({ items, boardId, title }) {
  const [boardItems, setBoardItems] = useState([]);

  const getItemStyle = (isDragging, draggableStyle) => ({
    "backgroundColor": "white",
    "height": "100px",
    "marginBottom": "10px",
    "padding": "10px",
    "border": "1px solid #e3e6ea",

    // styles we need to apply on draggables
    ...draggableStyle
  });

  const modalCtx = useContext(ToDoModalContext);
  useEffect(() => {
    if (items != undefined)
      setBoardItems([...items]);

  }, [items]
  )

  const showItemDesc = (event,item) => {
    modalCtx.setSelectedToDoItem(item);
    console.log(item)
    modalCtx.handleOpenModal();
  }

  return (
    <div id={boardId} className='board'>
      <h4 className='board-title'>{title}</h4>
      <div className='drop-zone-container'>


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
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}

                    >
                      <div className="to-do-item" onClick={(event) =>showItemDesc(event,item)}>
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
    </div>
  )
}