import './App.css'
import { TopSlider } from './components/TopSlider';
import { Body } from './components/Body'
import { CardsBlock } from './components/CardsBlock';
import { ToTop } from './components/ToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header />
    <TopSlider />
    <Body />
    <CardsBlock />
    <Footer />
    <ToTop />
    </>
  );
}

export default App;
