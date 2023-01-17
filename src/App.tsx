import './App.css'
import { TopSlider } from './components/TopSlider';
import { Body } from './components/Body'
import { CardsBlock } from './components/CardsBlock';
import { ToTop } from './components/ToTop'
import { Footer } from './components/Footer'
import { Header } from './components/Header';
import { useEffect, useRef, useState } from 'react';
import { Context } from './context';

function App() {

  const [numCardBlock, setNumCardBlock] = useState(0)
  const [hasMoreCards, setHasMoreCards] = useState(true)
  const [windowscrollY, setwindowscrollY] = useState(window.scrollY)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [headRolletClick, setHeadRolletClick] = useState(false)
  const [accordionClickOpen, setAccordionClickOpen] = useState(true)

  const takeNum = (n: number) => {
    setNumCardBlock(n)
  }

  const takeHasMore = (b: boolean) => {
    setHasMoreCards(b)
  }

  const clickHeadCalcRollet = (b: boolean) => {
    setHeadRolletClick(b)
  }
  
  
    // setTimeout(()=>{
    //   window.onscroll = (() => setwindowscrollY(window.scrollY))
    //   setWindowHeight(window.innerHeight)
    // },500)
  
    

  return (
    <Context.Provider value={{
      takeNum,
      hasMoreCards,
      takeHasMore,
      clickHeadCalcRollet,
      headRolletClick,
      accordionClickOpen, 
      setAccordionClickOpen,
      numCardBlock, 
      setNumCardBlock
    }}>
      <Header />
      <TopSlider />
      <Body/>
      <CardsBlock />
      <Footer />
      <ToTop />
    </Context.Provider>
  );
}

export default App;
