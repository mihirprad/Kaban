import React, {useState} from "react"
import KabanBoard from "../KabanBoard/KabanBoard"
import AddNewTask from "../Backlog/AddNewTask"
import './App.css'
export default function App(){

    return(
            <div id="kaban-main-screen">
                <AddNewTask />
                <KabanBoard />
            </div>
    )
}