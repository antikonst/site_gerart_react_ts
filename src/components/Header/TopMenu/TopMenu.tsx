import { FC, useContext } from "react"
import { Button, Col, Navbar, Row } from "react-bootstrap"
import { Context } from "../../../context"
import { links } from "../../../links"
import { Logo } from "../Logo"
import { Search } from "../Search"

interface Props {
  onChange: (txt: boolean) => void
}

export const TopMenu: FC<Props> = ({ onChange }) => {

  const { takeNum, takeHasMore, setAccordionClickOpen } = useContext<any>(Context)

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
      {elem(0, false, 'Вертикальные жалюзи')}
      {elem(1, false, 'Горизонтальные жалюзи')}
      {elem(2, false, 'Рулонные шторы')}
      {elem(3, false, 'Шторы-плиссе')}
      {elem(4, false, 'Профили роллет')}
      {elem(5, false, 'Управление роллет')}
      {elem(6, false, 'Монтаж роллет')}
      {elem(7, false, 'Расчёт роллет')}
      {elem(8, false, 'Секционные ворота')}
      {elem(9, false, 'Рулонные ворота')}
      {elem(10, false, 'Откатные ворота')}
      {elem(11, false, 'Автоматика')}
    </div>
  )
}