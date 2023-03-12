import React, {useContext} from 'react';
import './Board.css'
import DragContext from './Store/draggable-context'
export default function Board({items, id}){
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
        if (!event.currentTarget.contains(dragCtx.draggedItem)) {
          let dropTarget = event.currentTarget;
          let boundingRect = dropTarget.getBoundingClientRect();
          let offset = event.clientY - boundingRect.top;
          let items = Array.from(dropTarget.querySelectorAll('.draggable'));
      
          let insertBeforeItem = null;
          for (let i = 0; i < items.length; i++) {
            let itemRect = items[i].getBoundingClientRect();
            if (offset < (itemRect.top + itemRect.height / 2)) {
              insertBeforeItem = items[i];
              break;
            }
          }
      
          if (insertBeforeItem) {
            dropTarget.insertBefore(dragCtx.draggedItem, insertBeforeItem);
          } else {
            dropTarget.appendChild(dragCtx.draggedItem);
          }
        }
      
        validDropTarget = false;
        event.currentTarget.classList.remove("hover");
      }

    const dragLeaveEvent = (event) => {
        if (validDropTarget) {
          validDropTarget = false;
          event.currentTarget.classList.remove("hover");
        }
    }

    return(
        <div id={id} className='drop-zone board' onDragOver={dragoverEvent} onDragLeave = {dragLeaveEvent} onDrop = {dropEvent}>
            {items}
        </div>
    )
}