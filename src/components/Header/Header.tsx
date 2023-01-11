import { useState } from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap"
import { Hamburger } from "../Hamburger"
import { MenuContact } from "./MenuContact"
import './Header.css'
import { TopMenu } from "../TopMenu";

export const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [openclose, setOpenclose] = useState(false)

  const showTrue = () => {
    if (openclose) {
      handleClose()
      setTimeout(() => setOpenclose(show), 100)
    } else {
      handleShow()
      setTimeout(() => setOpenclose(show), 100)
    }
  }

  return (
    <>
      <Navbar className="py-0">
        <Nav className="me-auto">
          <MenuContact />
        </Nav>
        <Nav id="hamburgerButton" className="me-2 z_index" onClick={() => showTrue()}>
          <Hamburger checked={show} />
        </Nav>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TopMenu onChange={txt => setTimeout(() => setOpenclose(txt), 101)}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}