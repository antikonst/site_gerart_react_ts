import { FC, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Context } from "../../context";
import { Logo } from "../Header/Logo";

interface Props {
  text: any
  classnames: string
}

export const NaGlavnuyu: FC<Props> = ({ text, classnames }) => {

  const { takeNum, takeHasMore, setAccordionClickOpen } = useContext<any>(Context)

  return (
    <Button className={classnames} variant="outline-primary" onClick={() => {
      setAccordionClickOpen(true); takeNum(0); takeHasMore(true);
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
    }}>
      <Row>
        <Col xs={4}><Logo /></Col>
        <Col xs={8} className="pt-2">{text}</Col>
      </Row>
    </Button>
  )
}