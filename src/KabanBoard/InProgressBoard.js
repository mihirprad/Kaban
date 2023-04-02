import React, { useEffect } from "react";
import './InProgressBoard.css'
import Constants from "./constants";
import Board from "./Board";
export default function InProgressBoard({inProgressItems}){
    useEffect(()=>{
        //console.log(inProgressItems)
    })
    return <Board items={inProgressItems} boardId = {Constants.IN_PROGRESS_BOARD_ID} title="In progress items"/>
}