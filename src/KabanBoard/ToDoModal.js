import React, {useState, useContext} from "react";
import Modal from "react-modal";
import ToDoModalContext from "./Store/to-do-modal-context";
export default function ToDoModal(){
    const modalContext = useContext(ToDoModalContext);


    return (    <>
        <button onClick={modalContext.handleOpenModal}>Open Modal</button>
        <Modal isOpen={modalContext.modalIsOpen} onRequestClose={modalContext.handleCloseModal}>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
          <button onClick={modalContext.handleCloseModal}>Close Modal</button>
        </Modal>
      </>)

}