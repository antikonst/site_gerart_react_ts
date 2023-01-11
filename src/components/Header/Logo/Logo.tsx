import './Logo.css'
import { ReactComponent as GerartSvg } from '../img/gerart.svg'

export const Logo = () => {
  return (
      <div title="GerArt" className="logo">
          <GerartSvg />
      </div>
  )
}