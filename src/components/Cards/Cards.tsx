import { FC } from "react"

interface Props {
  h2: string
  h2_muted: string
  text: any
  src: any
  right: boolean
}

export const Cards: FC<Props> = ({ h2, h2_muted, text, src, right }) => {

  const right_block = "order-md-2"
  const class_right = `col-md-7 ${right && right_block}`

  return (
    <>
      <div className="row featurette">
        <div className={class_right}>
          <h2 className="featurette-heading fw-normal lh-1">{h2} <span className="text-muted">{h2_muted}</span></h2>
          <p className="lead">{text}</p>
        </div>
        <div className="col-md-5">
          <img src={src} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
        </div>
      </div>
      <hr className="featurette-divider" />
    </>
  )
}