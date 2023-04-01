import React, {useState, useContext} from "react";
import Modal from "react-modal";
import ToDoModalContext from "./Store/to-do-modal-context";
import './ToDoModal.css'

Modal.setAppElement('#root');

export default function ToDoModal(){
    const modalContext = useContext(ToDoModalContext);


    return (    <>
    <div><Modal isOpen={modalContext.modalIsOpen} onRequestClose={modalContext.handleCloseModal}  className="to-do-modal" >
          <h2>{modalContext.selectedToDoItem.content}</h2>
          <button onClick={modalContext.handleCloseModal}>Close Modal</button>
        </Modal></div>
        
      </>)

}