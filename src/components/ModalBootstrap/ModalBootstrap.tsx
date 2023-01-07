import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalBootstrap.css'

export const ModalBootstrap:FC<any> = ({children, title, btn_txt}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       {btn_txt}
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton  className='black' >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body  className='black' >{children}</Modal.Body>
      </Modal>
    </>
  );
}
