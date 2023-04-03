import React, { useState } from "react";
import './AddNewTask.css'
export default function AddNewTask() {
    const [newTask, setNewTask] = useState("");
    const inputChangeHandler = (event) => {
        let newValue = event.target.value;
        setNewTask(newValue);
    }

    const clickHandler = (event) => {
        //send data to back end
        setNewTask("");
    }
    return (
        <div id = "add-new-task-component">
            <h1>Add new task</h1>
            <div 
                style = {{
                    display: "flex",

                }}
            >
                <input value={newTask} onChange={inputChangeHandler} id="new-task-input" />
                <button onClick={clickHandler} id = "add-task-btn">Add</button>
            </div>

        </div>
        
        )
}