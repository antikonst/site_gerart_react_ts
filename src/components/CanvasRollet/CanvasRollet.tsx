import React, { forwardRef, RefObject, useContext, useImperativeHandle } from "react"
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Context } from "../../context"
import { profilObj } from "./profileObj"
import './CanvasRollet.css'

interface Props {
  width: number
  height: number
  pr: number
  color: string
  onChange: (txt: string) => void
  onKorob: (txt: number) => void
}

export const CanvasRollet: FC<Props> = React.memo(({ width, height, pr, color, onChange, onKorob }) => {

  const { headRolletClick } = useContext<any>(Context)

  const [napr, setNapr] = useState(0)
  const [max_w, setMaxw] = useState(2150)
  const [max_h, setMaxh] = useState(4017)
  const [kor, setKor] = useState(137)
  //const [data, setData] = useState('')
  //let data = ''

  useEffect(() => {
    setNapr(profilObj[pr][0])
    setMaxw(profilObj[pr][1])
    setMaxh(profilObj[pr][2])
    let maxkor = Object.keys(profilObj[pr][3]).find(item => height <= +item)
    setKor(maxkor && profilObj[pr][3][maxkor])
    onKorob(maxkor && profilObj[pr][3][maxkor])
  }, [pr, headRolletClick])

  useEffect(() => {
    canvasPryamo()
  }, [width, height, pr, color, headRolletClick])

  //console.log('render canvas')

  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)
  const canvas = canvasRef.current
  const ctx = canvas?.getContext('2d')
  const block = (document.getElementById('roll_block') as HTMLElement)
  const elem = block && block.getBoundingClientRect()
  const w_block = elem && elem.width
  const koeff = width / w_block
  const wk = width / koeff
  const hk = height / koeff

  const canvasPryamo = () => {
    let data = ''

    if (width > 300 && height > 300) {
      if (ctx) {
        ctx.fillStyle = color
        ctx.fillRect(0, 0, wk, hk)
        if (pr === 56) {
          ctx.lineWidth = 0.1
          ctx.fillStyle = "white"
          for (let i = 0; i <= Math.floor((width - 175) / 100); i++) {
            for (let j = 0; j <= Math.ceil((height - kor)) / 56; j++) {
              ctx.fillRect((napr + 20 + i * 100) / koeff, hk - 45 / koeff - (56 / koeff) * j, 80 / koeff, 30 / koeff)
              ctx.strokeRect((napr + 20 + i * 100) / koeff, hk - 45 / koeff - (56 / koeff) * j, 80 / koeff, 30 / koeff)
            }
          }
        }
        ctx.lineWidth = 1
        ctx.fillStyle = color
        ctx.fillRect(0, 0, wk, kor / koeff)
        ctx.fillRect(0, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.fillRect(wk - napr / koeff, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.strokeRect(0, 0, wk, kor / koeff)
        ctx.strokeRect(0, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.strokeRect(wk - napr / koeff, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.lineWidth = 0.1
        for (let i = 0; i <= (height - kor) / pr; i++) {
          ctx.beginPath();
          ctx.moveTo(napr / koeff, hk - i * pr / koeff);
          ctx.lineTo(wk - napr / koeff, hk - i * pr / koeff);
          ctx.closePath();
          ctx.stroke();
        }
        ctx.lineWidth = 1
        ctx.fillStyle = color
        ctx.lineWidth = 1
        ctx.beginPath();
        ctx.moveTo(wk + 10, hk);
        ctx.lineTo(wk + 10, 1);
        ctx.lineTo(kor / koeff + wk + 10, 1);
        ctx.lineTo(kor / koeff + wk + 10, kor / koeff / 4 * 3);
        ctx.lineTo(kor / koeff - kor / koeff / 4 + wk + 10, kor / koeff);
        ctx.lineTo(pr / 2.2 / koeff + wk + 10, kor / koeff);
        ctx.lineTo(pr / 2.2 / koeff + wk + 10, hk);
        ctx.lineTo(wk + 10, hk);
        ctx.stroke();
        ctx.fill();
        //setData((canvas as unknown as HTMLCanvasElement).toDataURL('image/png', 1.0))
        data = (canvas as unknown as HTMLCanvasElement).toDataURL('image/png', 1.0)
        onChange(data)
      }
    }
  }

  return (
    <div className="canvas-styles" >
      <canvas ref={canvasRef} width={wk + kor / koeff + 12} height={hk + 1} />
    </div>
  )
})
