import { Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { FC } from "react"

interface Props {
  name:any
  children:any
  url:any
}

export const ColBody:FC<Props> = ({name, children, url}) => {


  return (
    <Col className="text-center" lg={4}>
      <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={url} onClick={()=>{}}></img>
      <h2 className="fw-normal">{name}</h2>
      {children}
    </Col>
  )
}