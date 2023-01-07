import { FC } from "react"
import { Accordion } from "react-bootstrap"

export const AccordionHi:FC<any> = ({body1, body2, body3, body4}:any) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        {body1}
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        {body2}
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        {body3}
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        {body4}
      </Accordion.Item>
    </Accordion>
  )
}