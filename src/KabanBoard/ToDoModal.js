import React, { useState, useContext } from "react";
import Modal from "react-modal";
import ToDoModalContext from "./Store/to-do-modal-context";
import './ToDoModal.css'

Modal.setAppElement('#root');

export default function ToDoModal() {
  const modalContext = useContext(ToDoModalContext);

  const modalStyle = {
    content: {
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '40px',
      height: "70%",
      width: "80%"
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  };
  return (<>
    <Modal isOpen={modalContext.modalIsOpen} onRequestClose={modalContext.handleCloseModal} style={modalStyle}>
      <div id = "modal-details-section"><button onClick={modalContext.handleCloseModal} className="close-button">X</button>
      </div>
      <h1 className="modal-header">{modalContext.selectedToDoItem.header}</h1>
      <h6 className="modal-description-header">Description</h6>
      <p className="modal-description">{modalContext.selectedToDoItem.description}</p>
    </Modal>

  </>)

}