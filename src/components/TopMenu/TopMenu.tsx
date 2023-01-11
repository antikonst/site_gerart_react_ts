import { FC, useContext } from "react"
import { Button, Navbar } from "react-bootstrap"
import { Context } from "../../context"
import { Logo } from "../Header/Logo"

interface Props {
  onChange: (txt:boolean) => void
}

export const TopMenu:FC<Props> = ({onChange}) => {

  const {takeNum, takeHasMore} = useContext<any>(Context)

  const ham = document.getElementById('hamburger')

  const elem = (num:number, boo:boolean, text:string) => <Button variant="outline-primary" className="m-1" onClick={() => {ham?.click(); onChange(false); takeNum(num); takeHasMore(boo)}} size="sm">{text}</Button>

  return (
    <>
    <Navbar.Brand onClick={()=>{takeNum(0); takeHasMore(true); ham?.click(); onChange(false);}}><Logo /></Navbar.Brand>
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
     </>
  )
}