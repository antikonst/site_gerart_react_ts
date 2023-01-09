import { useEffect, useState } from 'react';
import './ToTop.css'

export const ToTop = () => {

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  const cls = "toTop "
  const [gotop, setGotop] = useState(window.scrollY)
  const vis = (gotop > 100) ? "visible" : "hidden"
  const [classtop, setClasstop] = useState(cls + vis)
  useEffect(() => {
    window.onscroll = (() => setGotop(window.scrollY))
    setClasstop(cls + vis)
  })

  return (
    <a id="toTop" href="#" role="button" className={classtop} onClick={scrollUp}>
      <svg width="48" height="48">
        {/* <defs>
          <filter id="MyFilter" filterUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
            <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
            <feSpecularLighting in="blur" surfaceScale="10" specularConstant=".9"
              specularExponent="35" lightingColor="#bbb"
              result="specOut">
              <fePointLight x="-95000" y="-910000" z="920000" />
            </feSpecularLighting>
            <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
              k1="0" k2="1" k3="1" k4="0" result="litPaint" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="litPaint" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#MyFilter)" >
	  <g> */}
        <circle cx="24" cy="24" r="22" stroke="#267cb5" strokeWidth="4" fillOpacity="0" />
        <path d="M24 9 L24 36" stroke="#267cb5" strokeWidth="4" />
        <path d="M36 24 L23 10 " stroke="#267cb5" strokeWidth="4" />
        <path d="M10 24 L25 10 " stroke="#267cb5" strokeWidth="4" />

    {/* </g>
    </g> */}
      </svg>
    </a>
  )
}