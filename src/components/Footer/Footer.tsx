import { Col, Container, Form, Nav, Navbar, Row, Stack } from 'react-bootstrap'
import { Logo } from '../Header/Logo'
import { MenuContact } from '../Header/MenuContact'
import './Footer.css'

export const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Жалюзи</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Вертикальные</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Горизонтальные</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Рулонные шторы</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Шторы-плиссе</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Роллеты</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Профили</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Управление</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Монтаж</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Расчёт</a></li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5>Ворота</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Секционные</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Рулонные</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Откатные</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Распашные</a></li>
              </ul>
            </div>

            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Форма обратной связи</h5>
                <p>Отправьте нам Ваш контакт и мы свяжемся с Вами в ближайшее время!</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <Form.Floating className="m-0">
                    <Form.Control
                      type="text"
                      placeholder="введите высоту в мм"
                      required
                    />
                    <label htmlFor="roll_width">Ваш контакт</label>
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                  </Form.Floating>
                  <button className="btn btn-primary" type="button">Отправить</button>
                </div>
              </form>
            </div>
          </div>

          {/* <Stack direction="horizontal" gap={3}>
            <Logo />
            <p className="me-auto" >&copy; 2023 GerArt, Inc. All rights reserved.</p>
            <MenuContact />
          </Stack> */}
          <Navbar expand="lg">
            <Nav className="me-auto">
            <Navbar.Brand href="#"><Logo /></Navbar.Brand>
              &copy; 2023 GerArt. Все права защищены.
            </Nav>
              <Nav className="ms-auto"><MenuContact /></Nav>
          </Navbar>
        </footer>
      </div>
    </>
  )
}