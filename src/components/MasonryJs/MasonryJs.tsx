import './MasonryJs.css'
import Masonry from 'masonry-layout'
import { rollimg } from './rollimg'
import { useEffect, useState } from 'react'

export const Masonryjs = () => {

  let rollimgmap = rollimg.map((item, index) =>
    <div key={+index} className="grid-item">
      <img onClick={(e: any) => {
        e.target.parentNode.classList.toggle('grid-item--width3')
        ifmsnry(grid!)
      }}
        alt=''
        src={rollimg[+index]} />
    </div>
  )

  const [grid, setGrid] = useState(document.querySelector('.grid'))
  const [mass, setMass] = useState(rollimgmap)

  const ifmsnry = (g: Element | null) => {
    if (g != null) {
      const msnry = new Masonry(g, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true
      })
      setGrid(g)
      msnry.layout!()
    }
  }

  useEffect(() => {
    setMass(rollimgmap)
    setGrid(document.querySelector('.grid'))
    ifmsnry(grid)
  }, [grid, rollimg])

  return (
    <div className="grid">
      <div className="grid-sizer"></div>
      <>
        {mass}
      </>
    </div>
  )
}