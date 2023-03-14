import React, {useState} from "react"
import TasksContext from "../Store/tasks-context"
import KabanBoard from "../KabanBoard/KabanBoard"
import AddNewTask from "../Backlog/AddNewTask"
export default function App(){

    return(
    <TasksContext.Provider>    
        <AddNewTask />
        <KabanBoard />
    </TasksContext.Provider>
    )
}