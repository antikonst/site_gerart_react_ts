import { FC, useEffect, useRef, useState } from 'react';
import './ToTop.css'

export const ToTop = () => {

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  const [windowOnScrollY, setwindowOnScrollY] = useState(0)
  useEffect(()=>{
    window.onscroll = (() => setwindowOnScrollY(window.scrollY))
  },[Math.ceil(window.scrollY/1000)*1000])

  const cls = "toTop "
  const vis = (windowOnScrollY > 100) ? "visible" : "hidden"
  const [classtop, setClasstop] = useState(cls + vis)
  useEffect(() => {
    setClasstop(cls + vis)
  })


  return (
    <a id="toTop" href="#" role="button" className={classtop} onClick={scrollUp}>
      <svg width="48" height="48">
        <circle cx="24" cy="24" r="22" stroke="#267cb5" strokeWidth="4" fillOpacity="0" />
        <path d="M24 9 L24 36" stroke="#267cb5" strokeWidth="4" />
        <path d="M36 24 L23 10 " stroke="#267cb5" strokeWidth="4" />
        <path d="M10 24 L25 10 " stroke="#267cb5" strokeWidth="4" />
      </svg>
    </a>
  )
}