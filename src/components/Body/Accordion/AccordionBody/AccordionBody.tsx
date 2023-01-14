import { FC, useContext } from "react"
import { Accordion } from "react-bootstrap"
import { Context } from "../../../../context"

interface Props {
  head: any
  body: any
  num: number
}

export const AccordionBody: FC<Props> = ({ head, body, num }) => {

  const { clickHeadCalcRollet, headRolletClick, takeNum, setAccordionClickOpen, takeHasMore } = useContext<any>(Context)

  return (
    <><Accordion.Header onClick={() => {takeNum(num); clickHeadCalcRollet(!headRolletClick); setAccordionClickOpen(true); takeHasMore(false) }}>{head}</Accordion.Header>
      <Accordion.Body>
        {body}
      </Accordion.Body></>
  )
}