import './App.css';
import { MenuContact } from './components/Header/MenuContact';
import { TopSlider } from './components/TopSlider';
import { Body } from './components/Body'
import { CardsBlock } from './components/CardsBlock';
import { ToTop } from './components/ToTop';

function App() {
  return (
    <>
    <MenuContact />
    <TopSlider />
    <Body />
    <CardsBlock />
    <ToTop />
    </>
  );
}

export default App;
