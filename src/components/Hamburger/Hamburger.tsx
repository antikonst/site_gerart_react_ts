import './Hamburger.css';

export const Hamburger =()=>{
  return(
    <div>
      <input id="hamburger" className="hamburger invisible d-none" type="checkbox" name="hamburger" />
			<label className="hamburger " htmlFor="hamburger"  id="cloze">
			<i></i>
		  </label>
    </div>
  )
}