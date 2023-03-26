import React, {useState} from "react"
import KabanBoard from "../KabanBoard/KabanBoard"
import AddNewTask from "../Backlog/AddNewTask"
export default function App(){

    return(
        <>
            <AddNewTask />
            <KabanBoard />
        </>


    )
}