import React, { FC, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

interface Props {
  onChange: (text: string) => void
}

export const UpravlenieRollet: FC<Props> = ({ onChange }) => {

  const uprObj = [
    'пружина',
    'шнур',
    'кардан',
    'привод',
    'привод с НХК'
  ]


  return (
    <div>
      <FloatingLabel controlId="roll_upravlenie" label="Управление" className="m-1 mt-2">
        <Form.Select id="roll_upravlenie" defaultValue="пружина" onChange={(e) => onChange(e.currentTarget.value)} >
          <option value="пружина" >пружина</option>
          <option value="шнур" >шнур</option>
          <option value="кардан" >кардан</option>
          <option value="привод" >привод</option>
          <option value="привод с НХК" >привод с НХК</option>
        </Form.Select>
      </FloatingLabel>
    </div>
  )
}