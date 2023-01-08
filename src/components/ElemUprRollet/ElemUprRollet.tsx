import React, { FC, useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

interface Props {
  onChange: (text: string) => void
  upravlenie: string
}

export const ElemUprRollet: FC<Props> = ({ onChange, upravlenie }) => {

  const uprObj = [
    'пружина',
    'шнур',
    'кардан',
    'привод',
    'привод с НХК'
  ]

  const ruch = [
    '-',
    'задвижки',
    'замок с ключом'
  ]

  const auto = [
    '-',
    'выключатель',
    'замковый выключатель',
    'радио + пульт ДУ',
    'ЭКУ ("таблетка")'
  ]

  const [upr, setUpr] = useState(ruch)
  const [elem, setElem] = useState(upr.map((item, index) => <option key={index} value={item}>{item}</option>))


  useEffect(() => {
    setUpr((uprObj.indexOf(upravlenie) > 2) ? auto : ruch)
  }, [upravlenie])

  useEffect(() => {
    setElem(upr.map((item, index) => <option key={index} value={item}>{item}</option>))
  }, [upr])

  return (
    <div>
      <FloatingLabel controlId="roll_elem" label="Элементы управления" className="m-1 mt-2">
        <Form.Select id="roll_elem" defaultValue="пружина" onChange={(e) => onChange(e.currentTarget.value)} >
          <>
            {elem}
          </>
        </Form.Select>
      </FloatingLabel>
    </div>
  )
}