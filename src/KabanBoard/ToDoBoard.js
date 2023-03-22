import React, { useState, useEffect } from 'react';
import './ToDoBoard.css';
import toDoItems from './toDoItems.json'
import Board from './Board'

export default function ToDoBoard() {
  return (
    <Board items={toDoItems} id = "to-do-board" title="To do list"/>
  );
}
