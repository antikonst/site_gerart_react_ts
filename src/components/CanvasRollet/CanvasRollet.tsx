import { FC, useEffect, useLayoutEffect, useRef, useState } from "react"

interface Props {
  width: number
  height: number
  pr: number
  color: string
  onChange: (txt: string) => void
  onKorob: (txt: number) => void
}

export const CanvasRollet: FC<Props> = ({ width, height, pr, color, onChange, onKorob }) => {

  const [napr, setNapr] = useState(0)
  const [max_w, setMaxw] = useState(2150)
  const [max_h, setMaxh] = useState(4017)
  const [kor, setKor] = useState(137)
  const [data, setData] = useState('')

  const profilObj: any = {
    39: [53, 2150, 4017,
      {
        1560: 137,
        1989: 150,
        2418: 165,
        2964: 180,
        4017: 205,
        6000: 250
      }
    ],
    44: [60, 3230, 5240,
      {
        1020: 150,
        1410: 165,
        2200: 180,
        3260: 205,
        4356: 230,
        6000: 250
      }
    ],
    55: [65, 3130, 4730,
      {
        1045: 165,
        1815: 180,
        2365: 205,
        3520: 230,
        6000: 250
      }
    ],
    56: [75, 4000, 6000,
      {
        2184: 180,
        2856: 205,
        4648: 250,
        6000: 300
      }
    ],
    77: [90, 7000, 6000,
      {
        1925: 250,
        2772: 300,
        4543: 360,
        6000: 405
      }
    ]
  }

  useEffect(() => {
    setNapr(profilObj[pr][0])
    setMaxw(profilObj[pr][1])
    setMaxh(profilObj[pr][2])
    let maxkor = Object.keys(profilObj[pr][3]).find(item => height <= +item)
    setKor(maxkor && profilObj[pr][3][maxkor])
    onKorob(maxkor && profilObj[pr][3][maxkor])
  }, [width, height, pr, color])

  const block = document.getElementById('roll_block') as HTMLElement
  const elem = block && block.getBoundingClientRect()
  const w_block = elem && elem.width
  const koeff = width / w_block
  const wk = width / koeff
  const hk = height / koeff
  const canvasRef = useRef(null)
  const canvas = canvasRef.current
  const ctx: any = canvas && (canvas as unknown as HTMLCanvasElement).getContext('2d')

  const canvasPryamo = () => {
    if (width>300 && height>300) {
      if (ctx) {
        ctx.fillStyle = color
        ctx.fillRect(0, 0, wk, hk)
        if (pr === 56) {
          ctx.fillStyle = "white"
          for (let i = 0; i <= Math.floor((width - 175) / 100); i++) {
            for (let j = 0; j <= Math.ceil((height - kor)) / 56; j++) {
              ctx.fillRect((napr + 20 + i * 100) / koeff, hk - 45 / koeff - (56 / koeff) * j, 80 / koeff, 30 / koeff)
              ctx.strokeRect((napr + 20 + i * 100) / koeff, hk - 45 / koeff - (56 / koeff) * j, 80 / koeff, 30 / koeff)
            }
          }
        }
        ctx.fillStyle = color
        ctx.fillRect(0, 0, wk, kor / koeff)
        ctx.fillRect(0, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.fillRect(wk - napr / koeff, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.strokeRect(0, 0, wk, kor / koeff)
        ctx.strokeRect(0, kor / koeff, napr / koeff, hk - kor / koeff)
        ctx.strokeRect(wk - napr / koeff, kor / koeff, napr / koeff, hk - kor / koeff)
        for (let i = 0; i <= (height - kor) / pr; i++) {
          ctx.beginPath();
          ctx.moveTo(napr / koeff, hk - i * pr / koeff);
          ctx.lineTo(wk - napr / koeff, hk - i * pr / koeff);
          ctx.closePath();
          ctx.stroke();
        }
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
        setData((canvas as unknown as HTMLCanvasElement).toDataURL('image/png', 1.0))
        onChange(data)
      }
    }
  }

  useLayoutEffect(() => {
    setTimeout(()=>canvasPryamo(), 1000) 
  })

  return (
    <>
      <canvas style={{ margin: 1, display:"none" }} ref={canvasRef} width={wk + kor/koeff + 11} height={hk + 1} />
    </>
  )
}