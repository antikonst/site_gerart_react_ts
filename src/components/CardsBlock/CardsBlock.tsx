import { Container } from 'react-bootstrap';
import { Cards } from '../Cards'
import { FC, useContext, useEffect, useState } from 'react'
import { ModalBootstrap } from '../ModalBootstrap';
import { Masonry_universal } from '../Masonry_universal';
import './CardsBlock.css'
import { VertikalInAccordion } from '../Body/Accordion/VertikalInAccordion';
import { Context } from '../../context';
import { GorizontalAccordion } from '../Body/Accordion/GorizontalAccordion';
import { RulonkaAccordion } from '../Body/Accordion/RulonkaAccordion';
import { PlisseAccordion } from '../Body/Accordion/PlisseAccordion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CalcRollet } from '../CalcRollet';
import { links } from '../../links';
import { texts } from '../../texts';

export const CardsBlock = () => {

  const { numCardBlock, hasMoreCards, searchBlock } = useContext<any>(Context)


  const modal_vert_img = <ModalBootstrap
    title=""
    btn_txt="жалюзи"
    children={
      <Masonry_universal
        id={'vert'}
        path_images={'./vert/'}
        n={15} />
    } />

  const modal_roll_img = <ModalBootstrap
    title=""
    btn_txt="галерея"
    children={
      <Masonry_universal
        id={'rollety'}
        path_images={'./rollety/'}
        n={33} />
    } />

  const modal_rulon_img = <ModalBootstrap
    title=""
    btn_txt="оформления"
    children={
      <Masonry_universal
        id={'rulonka'}
        path_images={'./rulonka/rulonka'}
        n={10} />
    } />

  const modal_section_vorota_img = <ModalBootstrap
    title=""
    btn_txt="галерея"
    children={
      <Masonry_universal
        id={'section_vorota'}
        path_images={'./section_vorota/vorota'}
        n={16} />
    } />

  const modal_gorizontal_img = <ModalBootstrap
    title=""
    btn_txt="горизонтальные"
    children={
      <Masonry_universal
        id={'gor'}
        path_images={'./gor/'}
        n={17} />
    } />

  const modal_plisse_img = <ModalBootstrap
    title=""
    btn_txt="Плиссе"
    children={
      <Masonry_universal
        id={'plisse'}
        path_images={'./plisse/plisse'}
        n={12} />
    } />


  // const debug = document.querySelector('.debug');
  // const boxes = document.querySelectorAll('.hidden');

  // const displayed: any = {};

  // const [vidimElems, setVidimElems] = useState([''])

  // const scrollTracking = (entries: any) => {
  //   for (const entry of entries) {
  //     displayed[entry.target.id] = entry.intersectionRatio >= 0.2;
  //   }
  //   if (debug) {
  //     debug.textContent = Object
  //       .entries(displayed)
  //       .filter(([id, inViewport]) => inViewport)
  //       .map(([id, inViewport]) => id)
  //       .join('\n')
  //   }
  //   setVidimElems(Object
  //     .entries(displayed)
  //     .filter(([id, inViewport]) => inViewport)
  //     .map(([id, inViewport]) => id)
  //   )
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(scrollTracking, {
  //     threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
  //   });
  //   boxes.forEach(element => observer.observe(element))
  //   vidimElems.map(item => document.getElementById(item)?.classList.toggle('visible'))
  //   console.log(vidimElems)
  // }, [debug?.textContent])



  let items = [
    // <pre key={777} className="debug"></pre>,
    <div key={0} className={"hidden"} id={links[0]} >
      <Cards
        h2={"Вертикальные жалюзи."}
        h2_muted={'Просто и уютно'}
        text={<>{texts[0]}
          <div className='my-3'>
            <VertikalInAccordion />
          </div>
        </>}
        right={false}
        src={require('./card_images/vertikal_zhaluzi.jpg')}
      />
    </div>,
    <div key={1} className={"hidden"} id={links[1]} >
      <Cards
        h2={"Горизонтальные жалюзи."}
        h2_muted={'Классика жанра'}
        text={<>{texts[1]}
          <div className='my-3'>
            <GorizontalAccordion />
          </div>
        </>}
        right={true}
        src={require('./card_images/gorizontalka.jpg')}
      />
    </div>,
    <div key={2} className={"hidden"} id={links[2]}>
      <Cards
        h2={"Рулонные шторы."}
        h2_muted={'Отличное решение'}
        text={<>{texts[2]}
          <div className='my-3'>
            <RulonkaAccordion />
          </div>
        </>}
        right={false}
        src={require('./card_images/rulonka.jpg')}
      />
    </div>,
    <div key={3} className={"hidden"} id={links[3]}>
      <Cards
        h2={"Шторы-плиссе."}
        h2_muted={'В любой плоскости'}
        text={<>{texts[3]}
          <div className='my-3'>
            <PlisseAccordion />
          </div>
        </>}
        right={true}
        src={require('./card_images/plisse.jpg')}
      />
    </div>,
    <div key={4} className={"hidden"} id={links[4]}>
      <Cards
        h2={"Рольставни."}
        h2_muted={'Защита и комфорт'}
        text={<>
        {texts[4]}
        {modal_roll_img}
        </>}
        src={require('./card_images/rolleta.jpg')}
        right={false} />
    </div>,
    <div key={5} className={"hidden"} id={links[5]}>
      <Cards
        h2={"Управление роллет."}
        h2_muted={'Ручное и автоматическое'}
        text={<>{texts[5]}</>}
        src={require('./card_images/rolleta.jpg')}
        right={true} />
    </div>,
    <div key={6} className={"hidden"} id={links[6]}>
      <Cards
        h2={"Монтаж роллет."}
        h2_muted={'Профессиональное исполнение'}
        text={<>{texts[6]}</>}
        src={require('./card_images/rolleta.jpg')}
        right={false} />
    </div>,
    <div key={7} className={"hidden"} id={links[7]}>
      <Cards
        h2={"Расчёт роллет."}
        h2_muted={'Здесь и сейчас'}
        text={<CalcRollet test={{ some: '' }} />}
        src={require('./card_images/rolleta.jpg')}
        right={true} />
    </div>,
    <div key={8} className={"hidden"} id={links[8]}>
      <Cards
        h2={"Секционные ворота."}
        h2_muted={'Идеи для дома'}
        text={<>
        {texts[8]}
        {modal_section_vorota_img}
        </>}
        src={require('./card_images/section_vorota.jpg')}
        right={false} />
    </div>,
    <div key={9} className={"hidden"} id={links[9]}>
      <Cards
        h2={"Рулонные ворота."}
        h2_muted={'Экономия пространства'}
        text={<>{texts[9]}</>}
        src={require('./card_images/section_vorota.jpg')}
        right={true} />
    </div>,
    <div key={10} className={"hidden"} id={links[10]}>
      <Cards
        h2={"Откатные ворота."}
        h2_muted={'Комфортная эксплуатация'}
        text={<>{texts[10]}</>}
        src={require('./card_images/section_vorota.jpg')}
        right={false} />
    </div>,
    <div key={11} className={"hidden"} id={links[11]}>
      <Cards
        h2={"Автоматика."}
        h2_muted={'Удобно и безопасно'}
        text={<>{texts[11]}</>}
        src={require('./card_images/auto.jpg')}
        right={true} />
    </div>
  ]

  let itemsArray = hasMoreCards ? items : [<hr key={99999} className="featurette-divider" />]
  //const slash

  //console.log(items[3].props.id)

  return (
    <>
      {/* <Container>
        {itemsArray}
      </Container> */}
      <Container>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path="/" element={itemsArray} />
            <Route path={links[0]} element={items[0]} />
            <Route path={links[1]} element={items[1]} />
            <Route path={links[2]} element={items[2]} />
            <Route path={links[3]} element={items[3]} />
            <Route path={links[4]} element={items[4]} />
            <Route path={links[5]} element={items[5]} />
            <Route path={links[6]} element={items[6]} />
            <Route path={links[7]} element={items[7]} />
            <Route path={links[8]} element={items[8]} />
            <Route path={links[9]} element={items[9]} />
            <Route path={links[10]} element={items[10]} />
            <Route path={links[11]} element={items[11]} />
            <Route path="/rezultat_poiska" element={<>{searchBlock}</>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}