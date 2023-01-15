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

export const CardsBlock = () => {

  const { numCardBlock, hasMoreCards } = useContext<any>(Context)
  

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
    btn_txt="рольставни"
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
    <div key={0} className={"hidden"} id={'cardblockselem0'} >
      <Cards
        h2={"Вертикальные жалюзи."}
        h2_muted={'Просто и уютно'}
        text={<>Вертикальные тканевые жалюзи предназначены для защиты от солнечного света, блокируя его попадание в помещение.Ткань, используемая в вертикальных жалюзи, обычно является светозащитным материалом, таким как плотная ткань, которая предназначена для блокирования большей части солнечного света. Жалюзи можно регулировать, вращая стержень или палочку, чтобы открывать и закрывать жалюзи. Затемняющая ткань обычно изготавливается из тяжелого, плотно сплетенного материала, который не пропускает свет в помещение.
        <div className='my-3'>
        <VertikalInAccordion />
        </div>
        </>}
        right={false}
        src={require('./card_images/vertikal_zhaluzi.jpg')}
      />
    </div>,
    <div key={1} className={"hidden"} id={'cardblockselem1'}>
      <Cards
        h2={"Горизонтальные жалюзи."}
        h2_muted={'Классика жанра'}
        text={<>Горизонтальные жалюзи представляют собой панели, которые перемещаются по горизонтальной оси и используются для поддержания правильного уровня освещения и внутреннего микроклимата. Эти горизонтальные жалюзи применяются для контроля проникновения света и температуры в комнату. Они могут быть использованы на окнах в домах, офисах, магазинах и других помещениях. Кроме того, в некоторых случаях горизонтальные жалюзи могут быть использованы для улучшения безопасности и контроля доступа.
        <div className='my-3'>
        <GorizontalAccordion />
        </div>
        </>}
        right={true}
        src={require('./card_images/gorizontalka.jpg')}
      />
    </div>,
    <div key={2} className={"hidden"} id={'cardblockselem2'}>
      <Cards
        h2={"Рулонные шторы."}
        h2_muted={'Отличное решение'}
        text={<>Рулонные шторы на окна являются идеальным решением для оформления интерьера. Они позволяют добиться стильного и необычного вида. У них есть дополнительные преимущества, такие как простота монтажа, разнообразие дизайна и комплекта для окон, а также стильные и практичные цвета. Они просто устанавливаются на любые окна и дают гармоничное сочетание с другими декоративными элементами, такими как декоративные подушки или карнизы. Они также могут быть использованы для регулировки света и температуры в помещении.
        <div className='my-3'>
        <RulonkaAccordion />
        </div>
        </>}
        right={false}
        src={require('./card_images/rulonka.jpg')}
      />
    </div>,
    <div key={3} className={"hidden"} id={'cardblockselem3'}>
      <Cards
        h2={"Шторы-плиссе."}
        h2_muted={'В любой плоскости'}
        text={<>Шторы плиссе в стиле минимализма замечательно подходят для создания чистого и приятного интерьера. Плиссе представляют собой классические полотна "гармошки", которые прекрасно гармонируют с различными видами интерьеров. Они имеют простое и минималистичное дизайнерское решение, которое подчеркивает стиль вашего интерьера и придает ему уют и легкость. Такие шторы прекрасно подходят для создания ощущения простоты и прозрачности. Они могут добавить необычный эффект в ваш интерьер, делая его более гармоничным и красивым.
        <div className='my-3'>
        <PlisseAccordion />
        </div>
        </>}
        right={true}
        src={require('./card_images/plisse.jpg')}
      />
    </div>,
    <div key={4} className={"hidden"} id={'cardblockselem4'}>
      <Cards
        h2={"Рольставни."}
        h2_muted={'Защита и комфорт'}
        text={<>Защитные {modal_roll_img} созданы из профилей различной степени защиты, и их конструкция имеет прочную и надежную структуру. Они изготовлены из металла, алюминия с пенонаполнением или цельнотянутого (экструдированного) алюминия, что делает их прочными и долговечными. Такие рольставни могут быть использованы для защиты от нежелательного входа в помещение, а также для предотвращения попадания посторонних лиц в помещение. Они могут быть использованы для защиты дверей, окон и других входных путей. Защитные рольставни могут быть изготовлены в различных цветах, размерах.</>}
        src={require('./card_images/rolleta.jpg')}
        right={false} />
    </div>,
    <div key={5} className={"hidden"} id={'cardblockselem5'}>
      <Cards
        h2={"Секционные ворота."}
        h2_muted={'Идеи для дома'}
        text={<>Гаражные секционные ворота - наиболее удобный и практичный способ закрыть проём для въезда автомобиля или подъезда к дому. Они состоят из секций, которые перемещаются по плоскости стены, уходя в плоскость потолка. Эти {modal_section_vorota_img} изготовлены из стальныл сэндвич-панелей с заполнением вспененным полиуретаном. Они предоставляют отличную защиту предотвращения несанкционированного доступа и обеспечивают безопасность для вашего дома. Они могут быть изготовлены с различными функциями, такими как автоматическое открывание и закрывание, сигнализация и т. д.</>}
        src={require('./card_images/section_vorota.jpg')}
        right={true} />
    </div>,
    <div key={6} className={"hidden"} id={'cardblockselem6'}>
      <Cards
        h2={"Автоматика."}
        h2_muted={'Удобно и безопасно'}
        text={'Автоматизация для распашных, откатных и секционных ворот, автоматические рольставни и двери - это современные системы, предназначенные для автоматизации таких предметов, как ворота, двери и рольставни. Они позволяют производить открытие и закрытие этих предметов без присутствия человека, что позволяет значительно сократить затраты на работу и увеличить безопасность. Такие системы могут быть оснащены множеством различных функций, таких как автоматическое закрытие, интеллектуальный пульт дистанционного управления и датчики присутствия. Такие системы могут быть установлены и настроены для использования в различных условиях и при работе с различными видами ворот, дверей и рольставен.'}
        src={require('./card_images/auto.jpg')}
        right={false} />
    </div>
  ]

  let itemsArray = hasMoreCards ? items : [<hr key={99999} className="featurette-divider" />, items[numCardBlock]]

  return (
    <Container>
      {itemsArray}
    </Container>
  );
}