import React,{useState} from "react";

export default function AddNewTask(){
    const [newTask, setNewTask] = useState("");
    const inputChangeHandler = (event) =>{
        let newValue = event.target.value;
        setNewTask(newValue);
    }

    const clickHandler = (event) =>{
        //send data to back end
    }
    return (<>
        <input value = {newTask} onChange={inputChangeHandler}/>
        <button onClick = {clickHandler}>Add</button>
    </>)
}