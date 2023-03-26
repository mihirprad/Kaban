import React, { useState, useEffect } from 'react';
import './ToDoBoard.css';
import Board from './Board'
import Constants from './constants';
export default function ToDoBoard({toDoItems}) {
  useEffect(()=>{

  })
  return (
    <Board items={toDoItems} boardId = {Constants.TO_DO_BOARD_ID} title="To do list" droppableId = {Constants.TO_DO_BOARD_ID}/>
  );
}
