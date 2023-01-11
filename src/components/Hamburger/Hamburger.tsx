import { FC } from 'react';
import './Hamburger.css';

interface Props {
  checked: boolean
}

export const Hamburger:FC<Props> =({checked})=>{



  return(
    <div>
      <input defaultChecked={checked} id="hamburger" className="hamburger invisible d-none" type="checkbox" name="hamburger" />
			<label className="hamburger " htmlFor="hamburger"  id="cloze">
			<i></i>
		  </label>
    </div>
  )
}