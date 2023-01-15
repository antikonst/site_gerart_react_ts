import { Button, ButtonToolbar, Nav } from "react-bootstrap"
import { Masonry_universal } from "../../../Masonry_universal"
import { ModalBootstrap } from "../../../ModalBootstrap"
import './PlisseAccordion.css'
import { ReactComponent as Photo } from '../img/photo.svg'
import { ReactComponent as System } from '../img/system.svg'
import { ReactComponent as Material } from '../img/material.svg'
import { ReactComponent as Calc } from '../img/calc.svg'

export const PlisseAccordion = () => {

    const modal_plisse_img = <ModalBootstrap
    title=""
    variant={"outline-primary"}
    btn_txt={
      <>
        <Nav.Item>
          <Photo />
        </Nav.Item><Nav.Item>
          <span className="span_text">фото</span>
        </Nav.Item>
      </>
    } 
    children={
      <Masonry_universal
        id={'plisse'}
        path_images={'./plisse/plisse'}
        n={12} />
    } />

  return (
    <>
      <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups">

        {modal_plisse_img}

        <Button variant="outline-primary">
          <Nav.Item>
            <System />
          </Nav.Item>
          <Nav.Item>
            <span className="span_text">системы</span>
          </Nav.Item>
        </Button>

        <Button variant="outline-primary">
          <Nav.Item>
            <Material />
          </Nav.Item>
          <Nav.Item>
            <span className="span_text">материал</span>
          </Nav.Item>
        </Button>

        <Button variant="outline-primary">
          <Nav.Item>
            <Calc />
          </Nav.Item>
          <Nav.Item>
            <span className="span_text">расчёт</span>
          </Nav.Item>
        </Button>

      </ButtonToolbar>
    </>
  )
}