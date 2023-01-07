import { FC } from "react"
import { Accordion } from "react-bootstrap"

export const AccordionBody: FC<any> = ({ head, body }: any) => {
  return (
    <><Accordion.Header>{head}</Accordion.Header>
      <Accordion.Body>
        {body}
      </Accordion.Body></>
  )
}