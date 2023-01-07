import { FC, useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  onChange: (text: number) => void
  max: number
}

export const InputHeight: FC<Props> = ({ onChange, max }) => {
  let [height, setHeight] = useState('1200')

  const w = (event: any) => {
    let e = event.target.value
    e = (e > max) ? max : e
    e = e.substring(0, 4)
    setHeight(e)
    onChange(e)
  }

  return (
    <Form.Floating className="m-1">
      <Form.Control
        type="number"
        placeholder="введите высоту в мм"
        min={300}
        max={max}
        maxLength={4}
        required
        onChange={w}
        onInput={w}
        value={height}
        onClick={()=>setHeight('')}
      />
      <label htmlFor="roll_width">↕высота, мм</label>
      <Form.Control.Feedback type="invalid">
        Введите высоту в миллиметрах от 300мм до {max}мм
      </Form.Control.Feedback>
    </Form.Floating>
  );
}