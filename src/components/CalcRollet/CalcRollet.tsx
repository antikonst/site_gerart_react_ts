import { useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { InputHeight } from "../InputHeight"
import { InputWidth } from "../InputWidth"
import { ProfileRollet } from "../ProfileRollet"

export const CalcRollet = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [profile, setProfile] = useState('39')

  return (
    <>
      <Form validated>
        <Row>
          <Col>
            <InputWidth onChange={(txt) => setWidth(txt)} max={6000} />
          </Col>
          <Col>
            <InputHeight onChange={(txt) => setHeight(txt)} max={6000} />
          </Col>
        </Row>
        <ProfileRollet onChange={(txt) => setProfile(txt)} />
      </Form>


    </>
  )
}