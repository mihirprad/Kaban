import React, { useState, useEffect } from 'react';
import './ToDoBoard.css';
import toDoItems from './toDoItems.json'
import Board from './Board'
import DraggableItem from './DraggableItem';
export default function ToDoBoard() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    let toDoListItems = toDoItems.map((item, index) => (
      <DraggableItem item={item} index={index} classAttr='to-do-item'/>
    ))
    setToDoList(toDoListItems)
  }, []);

  return (
    <Board items={toDoList} id = "to-do-board"/>
  );
}
