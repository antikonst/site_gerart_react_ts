import { Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FC } from "react"

export const ColBody:FC<any> = ({name, children, url}: any) => {


  return (
    <Col className="text-center" lg={4}>
      <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={url}></img>
      <h2 className="fw-normal">{name}</h2>
      {children}
    </Col>
  )
}