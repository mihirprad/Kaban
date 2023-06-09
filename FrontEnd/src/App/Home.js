import React from "react";
import KabanBoard from "../KabanBoard/KabanBoard"
import AddNewTask from "../Backlog/AddNewTask"

export default function Home(props){

    return(
        <div id="kaban-main-screen">
            <AddNewTask />
            <KabanBoard />
        </div>
    )
}