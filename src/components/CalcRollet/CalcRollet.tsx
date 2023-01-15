import React, { useEffect } from "react"
import { FC, useState } from "react"
import { Button, Col, Form, OverlayTrigger, Popover, Row, Image, Offcanvas, ButtonToolbar } from "react-bootstrap"
import { CanvasRollet } from "../CanvasRollet"
import { ColorRollet } from "../ColorRollet"
import { ElemUprRollet } from "../ElemUprRollet"
import { InputHeight } from "../InputHeight"
import { InputWidth } from "../InputWidth"
import { ProfileRollet } from "../ProfileRollet"
import { UpravlenieRollet } from "../UpravlenieRollet"
import './CalcRollet.css'



type MemoChildProps = {
  test: { some: string };
}

export const CalcRollet = React.memo<MemoChildProps>(() => {
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
  const [price, setPrice] = useState(0)

  const rolletaClose = () => setShowrolleta(false);
  const rolletaShow = () => setShowrolleta(true);

  const colors: any = {
    'beliy': "#ffffff",
    'seriy': "rgb(128, 138, 134)",
    'begeviy': "rgb(233, 203, 160)",
    'serebristiy': "rgb(186, 197, 197)",
    'korichneviy': "rgb(63, 35, 35)"
  }
  let kor_cena: number, pr_cena: number, s, one_cena: number, w_cena: number, napr_cena: number, upr_cena: number, privod_cena: number, privod_nhk_cena: number, ves, pim, elem_cena: number
  useEffect(() => {
    const kor: any = {
      137: width / 1000 * 870 + 481,
      150: width / 1000 * 880 + 487,
      165: width / 1000 * 950 + 504,
      180: width / 1000 * 1020 + 596,
      205: width / 1000 * 1460 + 832,
      230: width / 1000 * 1640 + 1130,
      250: width / 1000 * 1740 + 1584,
      300: width / 1000 * 1880 + 2081,
      360: width / 1000 * 2430 + 3765,
      405: width / 1000 * 2810 + 4730
    }
    const koefficient = 1.5
    s = width * height / 1000000
    kor_cena = kor[korob]
    if (profile === 39) {
      pr_cena = s * 1680
      w_cena = width / 1000 * (260 + 300)
      one_cena = 300
      napr_cena = (height - korob) / 1000 * 318 * 2
      pim = 630
      ves = s * 2.02 * 1.3
    } else if (profile === 44) {
      pr_cena = s * 3404
      w_cena = width / 1000 * (380 + 300)
      one_cena = 500
      napr_cena = (height - korob) / 1000 * 452 * 2
      pim = 1140
      ves = s * 5.3 * 1.3
    } else if (profile === 55) {
      pr_cena = s * 1806
      w_cena = width / 1000 * (380 + 380)
      one_cena = 500
      napr_cena = (height - korob) / 1000 * 380 * 2
      pim = 1140
      ves = s * 2.56 * 1.3
    } else if (profile === 56) {
      pr_cena = s * 2960
      w_cena = width / 1000 * (640 + 666)
      one_cena = 700
      napr_cena = (height - korob) / 1000 * 750 * 2
      pim = 2660
      ves = s * 3.73 * 1.3
    } else {
      pr_cena = s * 4490
      w_cena = width / 1000 * (640 + 470)
      one_cena = 700
      napr_cena = (height - korob) / 1000 * 670 * 2
      pim = 2660
      ves = s * 6.2 * 1.3
    }

    if (ves < 10) {
      privod_cena = 3100;
    } else if (ves < 20) {
      privod_cena = 3200;
    } else if (ves < 30) {
      privod_cena = 3700;
    } else if (ves < 40) {
      privod_cena = 4000;
    } else if (ves < 50) {
      privod_cena = 4200;
    } else if (ves < 60) {
      privod_cena = 6600;
    } else if (ves < 80) {
      privod_cena = 7700;
    } else if (ves < 80) {
      privod_cena = 8400;
    } else {
      privod_cena = 9000;
    }

    if (ves < 10) {
      privod_nhk_cena = 5100;
    } else if (ves < 20) {
      privod_nhk_cena = 5200;
    } else if (ves < 30) {
      privod_nhk_cena = 5700;
    } else if (ves < 40) {
      privod_nhk_cena = 6000;
    } else if (ves < 50) {
      privod_nhk_cena = 6200;
    } else if (ves < 60) {
      privod_nhk_cena = 9700;
    } else if (ves < 80) {
      privod_nhk_cena = 10000;
    } else if (ves < 80) {
      privod_nhk_cena = 10700;
    } else {
      privod_nhk_cena = 12700;
    }

    if (upravlenie === 'пружина') {
      upr_cena = pim
    }
    if (upravlenie === 'шнур') {
      upr_cena = (ves < 15) ? 1200 : NaN
    }
    if (upravlenie === 'кардан') {
      upr_cena = (ves < 36) ? 3280 : NaN
    }
    if (upravlenie === 'привод') {
      upr_cena = privod_cena
    }
    if (upravlenie === 'привод с НХК') {
      upr_cena = privod_nhk_cena
    }

    const elem: any = {
      '-': 0,
      'задвижки': 500,
      'замок с ключом': 1000,
      'выключатель': 700,
      'замковый выключатель': 2800,
      'ЭКУ ("таблетка")': 5805,
      'радио + пульт ДУ': 4890
    }

    elem_cena = elem[elemUpr]

    setPrice(upr_cena ? (Math.ceil((kor_cena + w_cena + napr_cena + pr_cena + one_cena + upr_cena + elem_cena) * koefficient)) : NaN)
  }, [korob, profile, width, height, upravlenie, elemUpr])
  //console.log(price)

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
        <ButtonToolbar
          className="justify-content-between mx-1">
          <Button variant="outline-secondary" onClick={rolletaShow} className="mt-1" size="lg">
            Эскиз
          </Button>
          <Button variant={price ? "outline-success" : "outline-danger"} onClick={rolletaShow} className="mt-1" size="lg">
            {`${price} руб.`}
          </Button>
        </ButtonToolbar>

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
          open={showrolleta}
        />
      </Form>


    </>
  )
})