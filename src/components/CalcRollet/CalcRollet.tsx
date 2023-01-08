import { useState } from "react"
import { Button, Col, Form, OverlayTrigger, Popover, Row, Image, Offcanvas } from "react-bootstrap"
import { CanvasRollet } from "../CanvasRollet"
import { ColorRollet } from "../ColorRollet"
import { ElemUprRollet } from "../ElemUprRollet"
import { InputHeight } from "../InputHeight"
import { InputWidth } from "../InputWidth"
import { ProfileRollet } from "../ProfileRollet"
import { UpravlenieRollet } from "../UpravlenieRollet"
import './CalcRollet.css'

export const CalcRollet = () => {
  const [width, setWidth] = useState(1200)
  const [height, setHeight] = useState(1200)
  const [profile, setProfile] = useState(39)
  const [col, setColor] = useState('beliy')
  const [upravlenie, setUpravlenie] = useState('пружина')
  const [elemUpr, setElemUpr] = useState('-')
  const [dataCanvasPryamo, setDataCanvasPryamo] = useState('')
  const [korob, setKorob] = useState(137)
  const imgFromDataCanvasPryamo = <Image width={"100%"} src={dataCanvasPryamo} />
  const [showrolleta, setShowrolleta] = useState(false);

  const rolletaClose = () => setShowrolleta(false);
  const rolletaShow = () => setShowrolleta(true);

  const colors: any = {
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
        <ColorRollet onChange={(txt) => setColor(txt)} />
        <UpravlenieRollet onChange={(txt) => setUpravlenie(txt)} />
        <ElemUprRollet onChange={(txt) => setElemUpr(txt)} upravlenie={upravlenie} />
        <Button variant="outline-secondary" onClick={rolletaShow} className="mt-1">
          Эскиз роллеты
        </Button>

        <Offcanvas show={showrolleta} onHide={rolletaClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Эскиз роллеты</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Row>
              <Col xs="1" sm="1" >
                <div className="vertical_text pb-5">
                  {height}
                </div>
              </Col>
              <Col>
                <Row>
                  <Col align="end">
                    {width}
                  </Col>
                  <Col align="end">
                    {korob}
                  </Col>
                </Row>
                {imgFromDataCanvasPryamo}
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>

        <CanvasRollet
          width={width}
          height={height}
          pr={profile}
          color={colors[col]}
          onChange={(data) => setDataCanvasPryamo(data)}
          onKorob={(text) => setKorob(text)}
        />
      </Form>


    </>
  )
}