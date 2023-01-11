import './App.css'
import { TopSlider } from './components/TopSlider';
import { Body } from './components/Body'
import { CardsBlock } from './components/CardsBlock';
import { ToTop } from './components/ToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header';
import { useState } from 'react';
import { Context } from './context';

function App() {

  const [numCardBlock, setNumCardBlock] = useState(0)
  const [hasMoreCards, setHasMoreCards] = useState(true)

  const takeNum = (n: number) => {
    setNumCardBlock(n)
  }

  const takeHasMore = (b: boolean) => {
    setHasMoreCards(b)
  }

  return (
    <Context.Provider value={{
      takeNum,
      takeHasMore
    }}>
      <Header />
      <TopSlider />
      <Body vidim={hasMoreCards} />
      <CardsBlock num={numCardBlock} hasMore={hasMoreCards} />
      <Footer />
      <ToTop />
    </Context.Provider>
  );
}

export default App;
