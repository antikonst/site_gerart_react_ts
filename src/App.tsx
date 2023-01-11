import './App.css';
import { MenuContact } from './components/Header/MenuContact';
import { TopSlider } from './components/TopSlider';
import { Body } from './components/Body'
import { CardsBlock } from './components/CardsBlock';
import { ToTop } from './components/ToTop';
import { Masonry_universal } from './components/Masonry_universal';
import { ModalBootstrap } from './components/ModalBootstrap';
import { Masonryjs } from './components/MasonryJs';

function App() {
  return (
    <>
    <MenuContact />
    <TopSlider />
    {/* <ModalBootstrap title="" btn_txt="рольставни" children={<Masonry_universal id={'roll_extra'} path_images={'./rulonka/rulonka'} n={10}/>} /> */}
    {/* <Masonry_universal id={'roll_extra'} path_images={'./img/'} n={33}/> */}
    <Body />
    <CardsBlock />
    <ToTop />
    </>
  );
}

export default App;
