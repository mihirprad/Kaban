import React, {useState, useContext} from "react";
import Modal from "react-modal";
import ToDoModalContext from "./Store/to-do-modal-context";
import './ToDoModal.css'

Modal.setAppElement('#root');

export default function ToDoModal(){
    const modalContext = useContext(ToDoModalContext);

    const modalStyle = {
      content: {
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        height: "70%",
        width: "80%"
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    };
    return (    <>
    <Modal isOpen={modalContext.modalIsOpen} onRequestClose={modalContext.handleCloseModal}   style= {modalStyle}>
          <h2>{modalContext.selectedToDoItem.content}</h2>
          <button onClick={modalContext.handleCloseModal}>Close Modal</button>
        </Modal>
        
      </>)

}