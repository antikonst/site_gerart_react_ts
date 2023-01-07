import React, { FC, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';

interface Props {
  onChange: (text:string) => void
}

export const ProfileRollet:FC<Props> = ({onChange}) => {

  return (
    <div>
      <FloatingLabel controlId="roll_profile" label="Профиль" className="m-1">
        <Form.Select id="roll_profile" defaultValue="39" onChange={(e) => onChange(e.currentTarget.value)} >
          <option value="39" >PD/39N</option>
          <option value="44" >AER44m/S</option>
          <option value="55" >PD/55mN</option>
          <option value="77" >PD/77</option>
          <option value="56" >AEG56</option>
        </Form.Select>
      </FloatingLabel>
    </div>
  )
}