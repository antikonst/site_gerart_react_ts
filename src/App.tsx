import './App.css'
import { TopSlider } from './components/TopSlider';
import { Body } from './components/Body'
import { CardsBlock } from './components/CardsBlock';
import { ToTop } from './components/ToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header';
import { useEffect, useState } from 'react';
import { Context } from './context';

function App() {

  const [numCardBlock, setNumCardBlock] = useState(0)
  const [hasMoreCards, setHasMoreCards] = useState(true)
  const [windowscrollY, setwindowscrollY] = useState(window.scrollY)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const takeNum = (n: number) => {
    setNumCardBlock(n)
  }

  const takeHasMore = (b: boolean) => {
    setHasMoreCards(b)
  }

  useEffect(()=>{
    window.onscroll = (() => setwindowscrollY(window.scrollY))
    setWindowHeight(window.innerHeight)
  })

  return (
    <Context.Provider value={{
      takeNum,
      takeHasMore
    }}>
      <Header />
      <TopSlider />
      <Body vidim={hasMoreCards} />
      <CardsBlock num={numCardBlock} hasMore={hasMoreCards} windowScrollY={windowscrollY} windowHeight={windowHeight} />
      <Footer />
      <ToTop windowOnScrollY={windowscrollY} />
    </Context.Provider>
  );
}

export default App;
