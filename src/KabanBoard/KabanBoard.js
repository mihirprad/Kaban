import React, { useState, useEffect } from "react";
import ToDoBoard from './ToDoBoard'
import InProgressBoard from "./InProgressBoard";
import dbToDoItems from './toDoItems.json'
import Constants from "./constants";
import './KabanBoard.css';
import { DragDropContext } from "react-beautiful-dnd";
import ToDoModal from "./ToDoModal";
import ToDoModalContext from "./Store/to-do-modal-context";
export default function KabanBoard() {
    const [toDoItems,setToDoItems] = useState([]);
    const [inProgressItems, setInProgressItems] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
      setModalIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalIsOpen(false);
    };

    const modalCtxState = {
      modalIsOpen,
      setModalIsOpen,
      handleOpenModal,
      handleCloseModal,
    }

    useEffect(()=>{
        setToDoItems([...dbToDoItems])
    },[])

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
    
        if (source.droppableId === destination.droppableId) {
          let [items, setItems] = getArrayById(source.droppableId)
          const newItems = Array.from(items);
          const [removed] = newItems.splice(source.index, 1);
          newItems.splice(destination.index, 0, removed);
          setItems(newItems);
        }
    
        if (source.droppableId !== destination.droppableId) {
          let [srcItems,setSrcItems] = getArrayById(source.droppableId);
          let [destItems,setDestItems] = getArrayById(destination.droppableId);
    
          const newItems1 = Array.from(srcItems);
          const newItems2 = Array.from(destItems);
          const [removed] = newItems1.splice(source.index, 1);
          newItems2.splice(destination.index, 0, removed);
          setSrcItems(newItems1);
          setDestItems(newItems2);
        }
      };

      const getArrayById = (id) =>{
        switch(id){
          case Constants.TO_DO_BOARD_ID:
            return [toDoItems, setToDoItems];
          case Constants.IN_PROGRESS_BOARD_ID:
            return [inProgressItems,setInProgressItems];
        }
      }

    return (<>
        <DragDropContext onDragEnd={onDragEnd}>
          <ToDoModalContext.Provider value={modalCtxState}>
            <ToDoModal/>
            <div id = "kaban-board">
                <ToDoBoard toDoItems={toDoItems} droppableId = {Constants.TO_DO_BOARD_ID}/>
                <InProgressBoard inProgressItems={inProgressItems} droppableId = {Constants.IN_PROGRESS_BOARD_ID}/>
            </div>
          </ToDoModalContext.Provider>
        </DragDropContext>
    </>)
}