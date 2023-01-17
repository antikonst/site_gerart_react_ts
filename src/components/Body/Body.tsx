import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ColBody } from './ColBody';
import { AccordionHi } from './Accordion';
import roll from './ColBody/imgColBody/r_140.jpg'
import vor from './ColBody/imgColBody/vor_140.jpg'
import zh from './ColBody/imgColBody/zh_140.jpg'
import { AccordionBody } from './Accordion/AccordionBody';
import ico_vert_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/vert.svg'
import ico_goriz_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/goriz.svg'
import ico_rulon_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/rulon.svg'
import ico_plisse_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/plisse.svg'
import ico_prof_roll from './Accordion/AccordionBody/ico_roll/prof.svg'
import ico_upr_roll from './Accordion/AccordionBody/ico_roll/upr.svg'
import ico_mont_roll from './Accordion/AccordionBody/ico_roll/mont.svg'
import ico_calc_roll from './Accordion/AccordionBody/ico_roll/calc.svg'
import section_ico from './Accordion/AccordionBody/ico_vorota/section.svg'
import rulon_ico from './Accordion/AccordionBody/ico_vorota/rulon.svg'
import rasp_ico from './Accordion/AccordionBody/ico_vorota/rasp.svg'
import otkat_ico from './Accordion/AccordionBody/ico_vorota/otkat.svg'
import { ModalBootstrap } from '../ModalBootstrap';
import { CalcRollet } from '../CalcRollet';
import { Masonry_universal } from '../Masonry_universal';
import { FC, useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { VertikalInAccordion } from './Accordion/VertikalInAccordion';
import { GorizontalAccordion } from './Accordion/GorizontalAccordion';
import { RulonkaAccordion } from './Accordion/RulonkaAccordion';
import { PlisseAccordion } from './Accordion/PlisseAccordion';
import { BrowserRouter, Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import { links } from '../../links';



export const Body = () => {

  const ico = (name: any) => <img width={30} height={30} className="rounded me-3" src={name} />

  const { hasMoreCards, accordionClickOpen } = useContext<any>(Context)


  const modal_roll_img = <ModalBootstrap
    title=""
    btn_txt="рольставни"
    children={
      <Masonry_universal
        id={'rollety'}
        path_images={'./rollety/'}
        n={33} />
    } />

  const modal_vert_img = <ModalBootstrap
    title=""
    btn_txt="жалюзи"
    children={
      <Masonry_universal
        id={'vert'}
        path_images={'./vert/'}
        n={15} />
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
    btn_txt="ворота"
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

  const vert_zhaluzi = <AccordionBody
    head={<>{ico(ico_vert_zhaluzi)}<h6>Вертикальные жалюзи</h6></>}
    body={<VertikalInAccordion />}
    num={0} />
  const goriz_zhaluzi = <AccordionBody
    head={<>{ico(ico_goriz_zhaluzi)}<h6>Горизонтальные жалюзи</h6></>}
    body={<GorizontalAccordion />}
    num={1} />
  const rulon_zhaluzi = <AccordionBody
    head={<>{ico(ico_rulon_zhaluzi)}<h6>Рулонные шторы</h6></>}
    body={<RulonkaAccordion />}
    num={2} />
  const plisse_zhaluzi = <AccordionBody
    head={<>{ico(ico_plisse_zhaluzi)}<h6>Шторы плиссе</h6></>}
    body={<PlisseAccordion />}
    num={3} />
  const prof_roll = <AccordionBody
    head={<>{ico(ico_prof_roll)}<h6>Профили роллет</h6></>}
    body={<>Защитные {modal_roll_img} созданы из профилей различной степени защиты, и их конструкция имеет прочную и надежную структуру. Они изготовлены из металла, алюминия с пенонаполнением или цельнотянутого (экструдированного) алюминия, что делает их прочными и долговечными. Такие рольставни могут быть использованы для защиты от нежелательного входа в помещение, а также для предотвращения попадания посторонних лиц в помещение. Они могут быть использованы для защиты дверей, окон и других входных путей. Защитные рольставни могут быть изготовлены в различных цветах, размерах.</>}
    num={4} />
  const upr_roll = <AccordionBody
    head={<>{ico(ico_upr_roll)}<h6>Управление роллет</h6></>}
    body="Поднимать и опускать защитные роллеты можно разными способами в зависимости от их веса, размера. Наиболее распространенными являются электромеханические системы, при которых вращение двигателя используется для поднятия и опускания роллет. Такие системы могут быть установлены практически на любой объект. Также используются механические системы, которые представляют собой механизм, предназначенный для поднятия и опускания роллет. Наиболее простые и бюджетные из них — шнуровое управление и управление при помощи пружинно-инерционного механизма. В некоторых случаях используются автоматические системы, которые работают по принципу пульта дистанционного управления. Такие системы могут быть оснащены таймерами и сенсорами для автоматического поднятия и опускания роллет."
    num={5} />
  const mont_roll = <AccordionBody
    head={<>{ico(ico_mont_roll)}<h6>Монтаж роллет</h6></>}
    body="У нас есть всё необходимое оборудование, а также опыт и ресурсы, чтобы смонтировать рольставни любой сложности и для любого объекта. Наши специалисты профессионально и качественно проведут установку рольставней, выполняя все процедуры по монтажу без каких-либо проблем. После установки рольставни будут протестированы и проверены на отсутствие скрытых неисправностей. Также мы произведем замену деталей рольставней и предоставим гарантию на ремонт."
    num={6} />
  const calc_roll = <AccordionBody
    head={<>{ico(ico_calc_roll)}<h6>Расчёт роллет</h6></>}
    body={<><CalcRollet test={{ some: '' }} /></>}
    num={7} />
  const section_vorota = <AccordionBody
    head={<>{ico(section_ico)}<h6>Секционные ворота</h6></>}
    body={<>Гаражные секционные ворота - наиболее удобный и практичный способ закрыть проём для въезда автомобиля или подъезда к дому.Они состоят из секций, которые перемещаются по плоскости стены, уходя в плоскость потолка.Эти {modal_section_vorota_img} изготовлены из стальныл сэндвич-панелей с заполнением вспененным полиуретаном. Они предоставляют отличную защиту предотвращения несанкционированного доступа и обеспечивают безопасность для вашего дома. Они могут быть изготовлены с различными функциями, такими как автоматическое открывание и закрывание, сигнализация и т. д.</>}
    num={8} />
  const rulon_vorota = <AccordionBody
    head={<>{ico(rulon_ico)}<h6>Рулонные ворота</h6></>}
    body={<>Рулонные ворота являются вариантом автоматических ворот, которые позволяют автоматически открываться и закрываться для доступа и защиты. Они имеют множество преимуществ по сравнению с другими видами автоматических ворот, таких как подъемные секционные ворота или складные ворота. Они являются легкими и простыми в установке и обслуживании. Они также более экономичные, чем другие виды автоматических ворот, и предоставляют больше возможностей для защиты и безопасности. Рулонные ворота могут быть использованы для разделения пространства или для предоставления доступа к любому типу помещения.</>}
    num={9} />
  const otkat_vorota = <AccordionBody
    head={<>{ico(otkat_ico)}<h6>Откатные ворота</h6></>}
    body={<>Откатные ворота являются одним из самых распространенных видов ворот. Они представляют собой полотно, расположенное на балке, внутри которой ролики на подшипниках, закрепленные на платформе, расположенной сбоку от проема. Они могут быть изготовлены из различных материалов, наиболее распространенными из них являются металл, дерево и пластик. Откатные ворота имеют малую стоимость и подходят для различных видов домов и предприятий. Они просты в установке и не требуют много пространства для открывания и закрывания.</>}
    num={10} />
  const rasp_vorota = <AccordionBody
    head={<>{ico(rasp_ico)}<h6>АВТОМАТИКА</h6></>}
    body={<>Автоматизация для распашных, откатных и секционных ворот, автоматические рольставни и двери - это современные системы, предназначенные для автоматизации таких предметов, как ворота, двери и рольставни. Они позволяют производить открытие и закрытие этих предметов без присутствия человека, что позволяет значительно сократить затраты на работу и увеличить безопасность. Такие системы могут быть оснащены множеством различных функций, таких как автоматическое закрытие, интеллектуальный пульт дистанционного управления и датчики присутствия. Такие системы могут быть установлены и настроены для использования в различных условиях и при работе с различными видами ворот, дверей и рольставен.</>}
    num={11} />

  const cild1 = <AccordionHi
    body1={vert_zhaluzi}
    body2={goriz_zhaluzi}
    body3={rulon_zhaluzi}
    body4={plisse_zhaluzi}
  />
  const cild2 = <AccordionHi
    id="roll_block"
    body1={prof_roll}
    body2={upr_roll}
    body3={mont_roll}
    body4={calc_roll}
  />
  const cild3 = <AccordionHi
    body1={section_vorota}
    body2={rulon_vorota}
    body3={otkat_vorota}
    body4={rasp_vorota}
  />

  const vidimBlock = <Container className='py-3' fluid='xxl'>
    <Row>
      <ColBody name="Жалюзи" children={cild1} url={zh} />
      <ColBody name="Роллеты" children={cild2} url={roll} />
      <ColBody name="Ворота" children={cild3} url={vor} />
    </Row>
  </Container>

const [allWithoutHome, setallWithoutHome] = useState(links.map((item, index)=><Route path={item} element={<hr className="featurette-divider"></hr>} key={index}/>))
useEffect(()=>{
  setallWithoutHome(links.map((item, index)=><Route path={item} element={<hr className="featurette-divider"></hr>} key={index}/>))
},[])

//console.log(allWithoutHome)

  return (
    <>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={vidimBlock} />
            {allWithoutHome}
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  )
}