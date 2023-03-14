import React,{useState} from "react";

export default function AddNewTask(){
    const [newTask, setNewTask] = useState("");
    const inputChangeHandler = (event) =>{
        let newValue = event.target.value;
        setNewTask(newValue);
    }

    const clickHandler = (event) =>{
        //send data to back end
        setNewTask("");
    }
    return (<>
        <div>Add new task</div>
        <input value = {newTask} onChange={inputChangeHandler}/>
        <button onClick = {clickHandler}>Add</button>
    </>)
}