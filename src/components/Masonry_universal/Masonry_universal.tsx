import './Masonry_universal.css'
import Masonry from 'masonry-layout'
import { FC, useEffect, useLayoutEffect, useMemo, useState } from 'react'
//import { rollimg } from '../MasonryJs/rollimg'

interface Props {
  id: string
  path_images: string
  n: number
}

export const Masonry_universal: FC<Props> = ({ id, path_images, n }) => {

  //const grid = document.querySelector(`grid ${id}`)

  let rollimg: any[] = []

  async function createRollImg(i: string | number) {
    let promise = new Promise((resolve) => {
      try {
        (require(path_images + i + ".jpg")) && resolve(require(path_images + i + ".jpg"))
      } catch (err) {
      }
    });
    let result = await promise
    rollimg.push(
      <div key={i} className="grid-item p-1">
        <img onClick={(e: any) => {
          e.target.parentNode.classList.toggle('grid-item--width3')
          ifmsnry(grid!)
        }}
          alt=''
          src={'' + result} />
      </div>

    )
  }

  useEffect(() => {
    for (let i = 0; i <= n; i++) {
      createRollImg(i)
    }
    console.log('rollimg')
  }, [rollimg])


  const [grid, setGrid] = useState(document.querySelector(`.${id}`))
  const [mass, setMass] = useState(rollimg)


  const ifmsnry = (g: Element | null) => {

    const msnry = new Masonry(g!, {
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    })
    setTimeout(() => {
      msnry.layout!()
    }, 300)

  }


  //setMass(rollimg)
  //setGrid(document.querySelector(`.${id}`))

  async function setMassFunction() {
    let promise = new Promise((resolve, reject) => {
      (rollimg.length = n) && resolve(rollimg)
    })
    let result: any = await promise
    setMass(result)
    console.log('mass')
  }

  async function setGridFunction() {
    let promise = new Promise((resolve, reject) => {
      (document.querySelector(`.${id}`)) && resolve((document.querySelector(`.${id}`)))
    })
    let result: any = await promise
    setGrid(result)
    setTimeout(() => result && ifmsnry(result), 300)
    console.log('grid')
  }

  useEffect(() => {
    setMassFunction()
    setGridFunction()
  }, [grid])

  return (
    <>
      <div className={`grid ${id}`} id={id}>
        <div className="grid-sizer"></div>
        <>
          {mass}
        </>
      </div>
    </>
  )
}