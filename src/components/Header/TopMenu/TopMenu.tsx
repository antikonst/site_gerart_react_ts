import { FC, useContext } from "react"
import { Button, Col, Navbar, Row } from "react-bootstrap"
import { Context } from "../../../context"
import { links } from "../../../links"
import { oglavlenie_menu } from "../../../oglavlenie_menu"
import { Logo } from "../Logo"
import { Search } from "../Search"

interface Props {
  onChange: (txt: boolean) => void
}

export const TopMenu: FC<Props> = ({ onChange }) => {

  const { takeNum, takeHasMore, setAccordionClickOpen, searchBlock } = useContext<any>(Context)

  const ham = document.getElementById('hamburger')

  //const elem = (num: number, boo: boolean, text: string) => <Button href={links[num]} variant="outline-primary" onClick={() => { ham?.click(); onChange(false); takeNum(num); takeHasMore(boo); setAccordionClickOpen(false) }} >{text}</Button>
  const elem = (num: number, boo: boolean, text: string) => <Button href={links[num]} variant="outline-primary" onClick={() => { ham?.click() }} >{text}</Button>

  return (
    <div className="d-grid gap-2">
      <Button variant="outline-primary" href="/" onClick={() => { setAccordionClickOpen(true); takeNum(0); takeHasMore(true); ham?.click(); onChange(false); }}>
        <Row>
          <Col xs={2}><Logo /></Col>
          <Col xs={10} className="pt-2">На главную</Col>
        </Row>
      </Button>
      <Search />
      {searchBlock}
      {elem(0, false, oglavlenie_menu[0])}
      {elem(1, false, oglavlenie_menu[1])}
      {elem(2, false, oglavlenie_menu[2])}
      {elem(3, false, oglavlenie_menu[3])}
      {elem(4, false, oglavlenie_menu[4])}
      {elem(5, false, oglavlenie_menu[5])}
      {elem(6, false, oglavlenie_menu[6])}
      {elem(7, false, oglavlenie_menu[7])}
      {elem(8, false, oglavlenie_menu[8])}
      {elem(9, false, oglavlenie_menu[9])}
      {elem(10, false, oglavlenie_menu[10])}
      {elem(11, false, oglavlenie_menu[11])}
    </div>
  )
}