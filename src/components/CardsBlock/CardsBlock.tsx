import { Button, Container, Spinner } from 'react-bootstrap';
import { Cards } from '../Cards'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useCallback, useEffect, useRef, useState } from 'react';
//import {find} from 'list-files'

export const CardsBlock = () => {

  const key_from_date = new Date()

  let items = [
    <div key={+key_from_date}>
      <Cards
        h2={"Вертикальные жалюзи."}
        h2_muted={'Просто и уютно'}
        text={'Вертикальные тканевые жалюзи предназначены для защиты от солнечного света, блокируя его попадание в помещение. Ткань, используемая в жалюзи, обычно является светозащитным материалом, таким как плотная ткань, которая предназначена для блокирования большей части солнечного света. Жалюзи можно регулировать, поворачивать вокруг оси, сдвигать, открывать и закрывать. Ламели могут изготавливаться ткани, пластика, алюминия, и других материалов, которые не пропускают свет в помещение.'}
        src={require('./card_images/vertikal_zhaluzi.jpg')}
        right={false} />
    </div>,
    <div key={+key_from_date + 1}>
      <Cards
        h2={"Секционные ворота."}
        h2_muted={'Идеи для дома'}
        text={'Гаражные секционные ворота - наиболее удобный и практичный способ закрыть проём для въезда автомобиля или подъезда к дому. Они состоят из секций, которые перемещаются по плоскости стены, уходя в плоскость потолка. Эти ворота изготовлены из стальных сэндвич-панелей с заполнением вспененным полиуретаном. Они предоставляют отличную защиту предотвращения несанкционированного доступа и обеспечивают безопасность для вашего дома. Они могут быть изготовлены с различными функциями, такими как автоматическое открывание и закрывание, сигнализация и т. д.'}
        src={require('./card_images/section_vorota.jpg')}
        right={true} />
    </div>,
    <div key={+key_from_date + 2}>
      <Cards
        h2={"Рольставни."}
        h2_muted={'Защита и комфорт'}
        text={'Защитные рольставни созданы из профилей различной степени защиты, и их конструкция имеет прочную и надежную структуру. Они изготовлены из металла, алюминия с пенонаполнением или цельнотянутого (экструдированного) алюминия, что делает их прочными и долговечными. Такие рольставни могут быть использованы для защиты от нежелательного входа в помещение, а также для предотвращения попадания посторонних лиц в помещение. Они могут быть использованы для защиты дверей, окон и других проёмов. Защитные рольставни могут быть изготовлены в различных цветах, размерах.'}
        src={require('./card_images/rolleta.jpg')}
        right={false} />
    </div>,
    <div key={+key_from_date + 3}>
      <Cards
        h2={"Автоматика."}
        h2_muted={'Удобно и безопасно'}
        text={'Автоматизация для распашных, откатных и секционных ворот, автоматические рольставни и двери - это современные системы, предназначенные для автоматизации таких предметов, как ворота, двери и рольставни. Они позволяют производить открытие и закрытие этих предметов без присутствия человека, что позволяет значительно сократить затраты на работу и увеличить безопасность. Такие системы могут быть оснащены множеством различных функций, таких как автоматическое закрытие, интеллектуальный пульт дистанционного управления и датчики присутствия. Такие системы могут быть установлены и настроены для использования в различных условиях и при работе с различными видами ворот, дверей и рольставен.'}
        src={require('./card_images/auto.jpg')}
        right={true} />
    </div>
  ]

  const [itemsArray, setItemsArray] = useState(Array.from([items[0]]))

  const fetchMoreData = () => {
    if (itemsArray.length <= items.length) {
      setTimeout(() => {
        setItemsArray(Array.from(itemsArray.concat(Array.from([items[itemsArray.length]]))))
      }, 1500)
    }
  };

  return (
    <Container>
      <InfiniteScroll
        className='overflow-hidden'
        dataLength={itemsArray.length}
        next={fetchMoreData}
        hasMore={true}
        loader={(itemsArray.length < items.length) &&
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              role="status"
              aria-hidden="true"
            />
            <div> Loading...</div>
          </Button>}
      >
        {itemsArray}
      </InfiniteScroll>
    </Container>
  );
}