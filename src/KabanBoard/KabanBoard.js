import React, { useState, useEffect } from "react";
import ToDoBoard from './ToDoBoard'
import InProgressBoard from "./InProgressBoard";
import dbToDoItems from './toDoItems.json'
import Constants from "./constants";
import './KabanBoard.css';
import { DragDropContext } from "react-beautiful-dnd";


export default function KabanBoard() {
    const [toDoItems,setToDoItems] = useState([]);
    const [inProgressItems, setInProgressItems] = useState([])

    useEffect(()=>{
        //setToDoItems([...dbToDoItems])
        setInProgressItems([...dbToDoItems])


    },[])

    const onDragEnd = (result) => {
        console.log(result)
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
        console.log(id)
        switch(id){
          case Constants.TO_DO_BOARD_ID:
            return [toDoItems, setToDoItems];
          case Constants.IN_PROGRESS_BOARD_ID:
            console.log("here")
            return [inProgressItems,setInProgressItems];
        }
      }

    return (<>
        <DragDropContext onDragEnd={onDragEnd}>
                <div id = "kaban-board">
                    <ToDoBoard toDoItems={toDoItems} droppableId = {Constants.TO_DO_BOARD_ID}/>
                    <InProgressBoard inProgressItems={inProgressItems} droppableId = {Constants.IN_PROGRESS_BOARD_ID}/>
                    {/* <ToDoBoard toDoItems={toDoItems} />
                    <InProgressBoard inProgressItems={inProgressItems}/> */}
                </div>
        </DragDropContext>
    </>)
}