import { Nav, Navbar } from "react-bootstrap"
import { Hamburger } from "../Hamburger"
import { MenuContact } from "./MenuContact"

export const Header = () => {
  return (
    <Navbar className="py-0">
      <Nav className="me-auto">
        <MenuContact />
      </Nav>
      <Nav className="me-2" onClick={()=>console.log('click')}>
        <Hamburger />
      </Nav>
    </Navbar>
  )
}