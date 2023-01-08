import { useState } from "react"
import { Button, Col, Form, OverlayTrigger, Popover, Row, Image } from "react-bootstrap"
import { CanvasRollet } from "../CanvasRollet"
import { ColorRollet } from "../ColorRollet"
import { ElemUprRollet } from "../ElemUprRollet"
import { InputHeight } from "../InputHeight"
import { InputWidth } from "../InputWidth"
import { ProfileRollet } from "../ProfileRollet"
import { UpravlenieRollet } from "../UpravlenieRollet"

export const CalcRollet = () => {
  const [width, setWidth] = useState(1200)
  const [height, setHeight] = useState(1200)
  const [profile, setProfile] = useState(39)
  const [col, setColor] = useState('beliy')
  const [upravlenie, setUpravlenie] = useState('пружина')
  const [elemUpr, setElemUpr] = useState('-')
  const [dataCanvasPryamo, setDataCanvasPryamo] = useState('')
  const imgFromDataCanvasPryamo = <Image width={"100%"} src={dataCanvasPryamo} />

  const colors:any = {
    'beliy': "#ffffff",
    'seriy': "rgb(128, 138, 134)",
    'begeviy': "rgb(233, 203, 160)",
    'serebristiy': "rgb(186, 197, 197)",
    'korichneviy': "rgb(63, 35, 35)"
  }

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
        <ProfileRollet onChange={(txt) => setProfile(+txt)} />
        <ColorRollet onChange={(txt) => setColor(txt)}/>
        <UpravlenieRollet onChange={(txt) => setUpravlenie(txt)}/>
        <ElemUprRollet onChange={(txt) => setElemUpr(txt)} upravlenie={upravlenie} />
        
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Body>
                {imgFromDataCanvasPryamo}
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="outline-secondary">Эскиз роллеты</Button>
        </OverlayTrigger>
          <CanvasRollet width={width} height={height} pr={profile} color={colors[col]} onChange={(data)=>setDataCanvasPryamo(data)} />
      </Form>


    </>
  )
}