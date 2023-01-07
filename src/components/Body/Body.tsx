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
import ico_vert_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/vert.jpg'
import ico_goriz_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/goriz.jpg'
import ico_rulon_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/rulon.jpg'
import ico_plisse_zhaluzi from './Accordion/AccordionBody/ico_zhaluzi/plisse.jpg'
import ico_prof_roll from './Accordion/AccordionBody/ico_roll/prof.jpg'
import ico_upr_roll from './Accordion/AccordionBody/ico_roll/upr.jpg'
import ico_mont_roll from './Accordion/AccordionBody/ico_roll/mont.jpg'
import ico_calc_roll from './Accordion/AccordionBody/ico_roll/calc.jpg'
import { ModalBootstrap } from '../ModalBootstrap';
import { Masonryjs } from '../MasonryJs';
import { InputWidth } from '../InputWidth';
import { useState } from 'react';
import { CalcRollet } from '../CalcRollet';

export const Body = () => {

  const [widthRollet, setWidthRollet] = useState(0)

  const ico = (name: any) => <img width={30} height={30} className="rounded me-3" src={name} />

  const modal_roll_img = <ModalBootstrap title="" btn_txt="рольставни" children={<Masonryjs />} />

  const vert_zhaluzi = <AccordionBody
    head={<>{ico(ico_vert_zhaluzi)}<h6>Вертикальные жалюзи</h6></>}
    body="Вертикальные тканевые жалюзи предназначены для защиты от солнечного света, блокируя его попадание в помещение. Ткань, используемая в жалюзи, обычно является светозащитным материалом, таким как плотная ткань, которая предназначена для блокирования большей части солнечного света. Жалюзи можно регулировать, вращая стержень или палочку, чтобы открывать и закрывать жалюзи. Затемняющая ткань обычно изготавливается из тяжелого, плотно сплетенного материала, который не пропускает свет в помещение."
  />
  const goriz_zhaluzi = <AccordionBody
    head={<>{ico(ico_goriz_zhaluzi)}<h6>Горизонтальные жалюзи</h6></>}
    body="Горизонтальные жалюзи представляют собой панели, которые перемещаются по горизонтальной оси и используются для поддержания правильного уровня освещения и внутреннего микроклимата. Эти жалюзи применяются для контроля проникновения света и температуры в комнату. Они могут быть использованы на окнах в домах, офисах, магазинах и других помещениях. Кроме того, в некоторых случаях горизонтальные жалюзи могут быть использованы для улучшения безопасности и контроля доступа."
  />
  const rulon_zhaluzi = <AccordionBody
    head={<>{ico(ico_rulon_zhaluzi)}<h6>Рулонные шторы</h6></>}
    body="Рулонные шторы на окна являются идеальным решением для оформления интерьера. Они позволяют добиться стильного и необычного вида. У них есть дополнительные преимущества, такие как простота монтажа, разнообразие дизайна и комплекта для окон, а также стильные и практичные цвета. Они просто устанавливаются на любые окна и дают гармоничное сочетание с другими декоративными элементами, такими как декоративные подушки или карнизы. Они также могут быть использованы для регулировки света и температуры в помещении."
  />
  const plisse_zhaluzi = <AccordionBody
    head={<>{ico(ico_plisse_zhaluzi)}<h6>Шторы плиссе</h6></>}
    body="Шторы плиссе в стиле минимализма замечательно подходят для создания чистого и приятного интерьера. Они представляют собой классические простые полотна, которые прекрасно гармонируют с различными видами интерьеров. Они имеют простое и минималистичное дизайнерское решение, которое подчеркивает стиль вашего интерьера и придает ему уют и легкость. Такие шторы прекрасно подходят для создания ощущения простоты и прозрачности. Они могут добавить необычный эффект в ваш интерьер, делая его более гармоничным и красивым."
  />
  const prof_roll = <AccordionBody
    head={<>{ico(ico_prof_roll)}<h6>Профили роллет</h6></>}
    body={<>Защитные {modal_roll_img} созданы из профилей различной степени защиты, и их конструкция имеет прочную и надежную структуру. Они изготовлены из металла, алюминия с пенонаполнением или цельнотянутого (экструдированного) алюминия, что делает их прочными и долговечными. Такие рольставни могут быть использованы для защиты от нежелательного входа в помещение, а также для предотвращения попадания посторонних лиц в помещение. Они могут быть использованы для защиты дверей, окон и других входных путей. Защитные рольставни могут быть изготовлены в различных цветах, размерах.</>}
  />
  const upr_roll = <AccordionBody
    head={<>{ico(ico_upr_roll)}<h6>Управление роллет</h6></>}
    body="Поднимать и опускать защитные роллеты можно разными способами в зависимости от их веса, размера. Наиболее распространенными являются электромеханические системы, при которых вращение двигателя используется для поднятия и опускания роллет. Такие системы могут быть установлены практически на любой объект. Также используются механические системы, которые представляют собой механизм, предназначенный для поднятия и опускания роллет. Наиболее простые и бюджетные из них — шнуровое управление и управление при помощи пружинно-инерционного механизма. В некоторых случаях используются автоматические системы, которые работают по принципу пульта дистанционного управления. Такие системы могут быть оснащены таймерами и сенсорами для автоматического поднятия и опускания роллет."
  />
  const mont_roll = <AccordionBody
    head={<>{ico(ico_mont_roll)}<h6>Монтаж роллет</h6></>}
    body="У нас есть всё необходимое оборудование, а также опыт и ресурсы, чтобы смонтировать рольставни любой сложности и для любого объекта. Наши специалисты профессионально и качественно проведут установку рольставней, выполняя все процедуры по монтажу без каких-либо проблем. После установки рольставни будут протестированы и проверены на отсутствие скрытых неисправностей. Также мы произведем замену деталей рольставней и предоставим гарантию на ремонт."
  />
  const calc_roll = <AccordionBody
    head={<>{ico(ico_calc_roll)}<h6>Расчёт роллет</h6></>}
    body={<><CalcRollet />
    </>}
  />

  const cild1 = <AccordionHi
    body1={vert_zhaluzi}
    body2={goriz_zhaluzi}
    body3={rulon_zhaluzi}
    body4={plisse_zhaluzi}
  />
  const cild2 = <AccordionHi
    body1={prof_roll}
    body2={upr_roll}
    body3={mont_roll}
    body4={calc_roll}
  />
  const cild3 = <AccordionHi
    body1=""
    body2=""
    body3=""
    body4=""
  />


  return (
    <Container className='p-3' fluid='xxl'>
      <Row>
        <ColBody name="Жалюзи" children={cild1} url={zh} />
        <ColBody name="Роллеты" children={cild2} url={roll} />
        <ColBody name="Ворота" children={cild3} url={vor} />
      </Row>
    </Container>
  )
}