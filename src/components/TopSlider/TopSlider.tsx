import Carousel from 'react-bootstrap/Carousel';
import roll from './img_carousel/roll.jpg'
import auto from './img_carousel/auto.jpg'
import vorota from './img_carousel/vorota.jpg'
import vert from './img_carousel/vert.jpg'
import './TopSlider.css'
import { useState } from 'react';


export function TopSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='ico' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={roll}
          alt="Рольставни"
        />
        <Carousel.Caption>
          <h1 className='shadow'>Рольставни</h1>
          <h5 className='shadow'>Рольставни - это защита от взлома, интерьерное решение для любых проёмов</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={vorota}
          alt="Ворота"
        />
        <Carousel.Caption>
          <h1 className='shadow'>Ворота</h1>
          <h5 className='shadow'>Секционные и рулонные ворота для гаражей и ангаров, откатные и распашные ворота</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={vert}
          alt="Жалюзи"
        />
        <Carousel.Caption>
          <h1 className='shadow'>Жалюзи</h1>
          <h5 className='shadow'>
          Вертикальные жалюзи, горизонтальные, рулонные шторы и шторы плиссе
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={auto}
          alt="Автоматика"
        />
        <Carousel.Caption>
          <h1 className='shadow'>Автоматика</h1>
          <h5 className='shadow'>Автоматика для ворот всех типов, рольставней, рулонных штор, жалюзи, шлагбаумы</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
