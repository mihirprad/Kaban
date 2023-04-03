import React, { useState, useContext } from "react";
import Modal from "react-modal";
import ToDoModalContext from "./Store/to-do-modal-context";
import './ToDoModal.css'

Modal.setAppElement('#root');

export default function ToDoModal() {
  const modalContext = useContext(ToDoModalContext);
  const [isDescEditing,setIsDescEditing] = useState(false);
  const[inputDescValue,setInputDescValue] = useState("")
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

  const modalDescStyle = {
    display : isDescEditing? "none" : "block",
  }

  const modalEditDescStyle = {
    display : isDescEditing? "block" : "none",

  }

  const handleDescInputChange = (event)=>{
    console.log(event.target.value)
    setInputDescValue(event.target.value);
  }

  const editDescription = ()=>{
    setInputDescValue(modalContext.selectedToDoItem.description);
    setIsDescEditing(true);
  }

  const saveEditedDescription = ()=>{
    setIsDescEditing(false);
  }

  return (<>
    <Modal isOpen={modalContext.modalIsOpen} onRequestClose={modalContext.handleCloseModal} style={modalStyle}>
      <div id="modal-details-section"><button onClick={modalContext.handleCloseModal} className="close-button">X</button>
      </div>
      <h1 className="modal-header">{modalContext.selectedToDoItem.header}</h1>
      <h6 className="modal-description-header">Description</h6>

      <div className = "modal-editable-description-field">
        <p className="modal-description" style={modalDescStyle} onClick = {editDescription}>{modalContext.selectedToDoItem.description}</p>
        <div style = {modalEditDescStyle}>
          <input value = {inputDescValue} onChange={handleDescInputChange} className="desc-input-field"/>
          <button onClick = {saveEditedDescription} >Save</button>
        </div>
      </div>
    </Modal>

  </>)

}