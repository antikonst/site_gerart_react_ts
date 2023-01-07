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
          <h5>Рольставни</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={vorota}
          alt="Ворота"
        />
        <Carousel.Caption>
          <h5>Ворота</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={vert}
          alt="Жалюзи"
        />
        <Carousel.Caption>
          <h5>Жалюзи</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-auto h-100 mx-auto"
          src={auto}
          alt="Автоматика"
        />
        <Carousel.Caption>
          <h5>Автоматика</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
