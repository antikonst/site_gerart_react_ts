import { FC, useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  onChange: (text: number) => void
  max: number
}

export const InputWidth: FC<Props> = ({ onChange, max }) => {
  let [width, setWidth] = useState('1200')

  const w = (event: any) => {
    let e = event.target.value
    e = (e > max) ? max : e
    e = e.substring(0, 4)
    setWidth(e)
    onChange(e)
  }

  return (
    <Form.Floating className="m-1">
      <Form.Control
        type="number"
        placeholder="введите ширину в мм"
        min={300}
        max={max}
        maxLength={4}
        required
        onChange={w}
        onInput={w}
        value={width}
        onClick={()=>setWidth('')}
      />
      <label htmlFor="roll_width">↔ширина, мм</label>
      <Form.Control.Feedback type="invalid">
        Введите ширину в миллиметрах от 300мм до {max}мм
      </Form.Control.Feedback>
    </Form.Floating>
  );
}