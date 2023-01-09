import React, { FC, useEffect, useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalBootstrap.css'

interface Props {
  children:any, 
  title?:any, 
  btn_txt:any, 
  btn_styles?:any
  closeModal?:any
}

export const ModalBootstrap:FC<Props> = ({children, title, btn_txt, btn_styles, closeModal}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  if (show === true) {
    if (closeModal === false) setShow(false)
  }
  

  return (
    <>
      <Button variant="outline-secondary" className={btn_styles} onClick={handleShow}>
       {btn_txt}
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen={true} >
        <Modal.Header className='black' >
          <CloseButton variant="white" onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body  className='black' >{children}</Modal.Body>
      </Modal>
    </>
  );
}
