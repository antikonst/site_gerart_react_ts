import { useContext, useRef, useState } from "react";
import { Col, Nav, Navbar, Offcanvas, Row } from "react-bootstrap"
import { Hamburger } from "./Hamburger"
import { MenuContact } from "./MenuContact"
import './Header.css'
import { TopMenu } from "./TopMenu";
import { Context } from "../../context";
import { NaGlavnuyu } from "../NaGlavnuyu";
import { Search } from "./Search";

export const Header = () => {

  const { takeNum, takeHasMore, setAccordionClickOpen } = useContext<any>(Context)

  const ham = document.getElementById('hamburger')

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
    <div>
      <Navbar className="py-0">
        <Nav className="me-auto">
          <MenuContact />
        </Nav>
        <Nav className="me-auto max576">
          <NaGlavnuyu text='GerArt' classnames={"me-auto"} />
        </Nav>
        <Nav className="me-auto max820">
          <Search />
        </Nav>
        <Nav id="hamburgerButton" className="me-2 z_index" onClick={() => showTrue()}>
          <Hamburger checked={show} />
        </Nav>
      </Navbar>
      <Offcanvas show={show} onHide={() => {handleClose(); ham?.click(); setTimeout(() => setOpenclose(false), 101)}} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TopMenu onChange={txt => setTimeout(() => setOpenclose(txt), 101)}/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
