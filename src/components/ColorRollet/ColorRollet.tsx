import { FC, useState } from "react"
import { Button, FloatingLabel } from "react-bootstrap"
import { ModalBootstrap } from "../ModalBootstrap"
import './ColorRollet.css'

interface Props {
  onChange: (txt: string) => void
}

export const ColorRollet: FC<Props> = ({ onChange }) => {
  const [stl, setStl] = useState("beliy")
  const [closeModal, setCloseModal] = useState(true)
  const btnstls = `bel_lg ${stl} p-3`
  
  const colors:any = {
    'beliy': 'белый',
    'seriy': 'серый',
    'begeviy': 'бежевый',
    'serebristiy': 'серебристый металлик',
    'korichneviy': 'коричневый'
  }
  const btncol = colors[stl]

  const children =
    <div className="d-grid gap-2">
      <Button className="beliy" variant="light" size="lg" onClick={() => { setStl("beliy"); onChange("beliy"); setCloseModal(false); setTimeout(()=>setCloseModal(true),500) }}>белый</Button>
      <Button className="seriy" variant="light" size="lg" onClick={() => { setStl("seriy"); onChange("seriy"); setCloseModal(false); setTimeout(()=>setCloseModal(true),500) }}>серый</Button>
      <Button className="begeviy" variant="light" size="lg" onClick={() => { setStl("begeviy"); onChange("begeviy"); setCloseModal(false); setTimeout(()=>setCloseModal(true),500) }}>бежевый</Button>
      <Button className="serebristiy" variant="light" size="lg" onClick={() => { setStl("serebristiy"); onChange("serebristiy"); setCloseModal(false); setTimeout(()=>setCloseModal(true),500) }}>серебристый металлик</Button>
      <Button className="korichneviy" variant="light" size="lg" onClick={() => { setStl("korichneviy"); onChange("korichneviy"); setCloseModal(false); setTimeout(()=>setCloseModal(true),500) }}>коричневый</Button>
    </div>

  return (
    <FloatingLabel controlId="roll_color" label="цвет" className="m-1 mt-2 ">
      <ModalBootstrap children={children} title="цвет роллет" btn_txt={btncol} btn_styles={btnstls} closeModal={closeModal} />
    </FloatingLabel>
  )
}