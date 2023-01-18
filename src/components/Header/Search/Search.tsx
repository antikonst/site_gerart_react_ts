import { Key, useContext, useState } from "react"
import { Button, Container, Form, InputGroup } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from "../../../context"
import { links } from "../../../links"
import { texts } from "../../../texts"

export const Search = () => {

  const { searchBlock, setSearchBlock, takeHasMore } = useContext<any>(Context)

  const [inputText, setInputText] = useState('')
  const [inputLength, setInputLength] = useState(0)

  //const text_ssilki = `"<a href='${links[0]}'>${inputText}</a>"`
  //const a_text: any = text_ssilki.split('')
  
  let massiv = texts
  
  const search_in_texts = () => {
    //const regText = new RegExp(inputText, "g")
    
    const text_ssilki = <a href={links[0]}>{inputText}</a>
    const neo = massiv.map((item: string, index: number) => ((item.search(inputText) > 0) ? (
      //item.split('').slice(0, item.search(inputText)).concat(text_ssilki).concat(item.split('').slice(item.search(inputText) + inputLength)).join('')
      <p key={index}>{item.split('').slice(0, item.search(inputText))}   <a href={links[index]}>{inputText}</a>   {item.split('').slice(item.search(inputText) + inputLength)}</p>
    ) : ''))
    //let result = [neo[1], neo]
    // neo.map((item, index) => (
    //   <Container key={index}>{item}</Container>
    // ))
    setSearchBlock(neo)
    takeHasMore(false)
    console.log(neo)
  }

  const w = (event: any) => {
    let e = event.target.value
    setInputText(e)
    setInputLength(e.length)
    //massiv = texts.map((item, index) => ((item.search(inputText) > 0) ? (
    // item.match(inputText)?.input + ' ' + 
    // item.match(inputText)?.index + ' ' + 
    // index + ' ' + item.search(inputText)
    //item.match(inputText)?.input?.replaceAll(inputText, `<a href=${links[index]}>${inputText}</a>`)
    //) : ''))
    //setSearchBlock(massiv)

    //console.log(massiv)
    console.log(searchBlock)
  }

  return (
    <>
      <InputGroup>
        <Button variant="outline-secondary" onClick={() => search_in_texts()}>
          <svg width="40" height="40">
            <circle cx="23" cy="17" r="15" stroke="#267cb5" strokeWidth="4" fillOpacity="0" />
            <path d="M0 40 L12 28" stroke="#267cb5" strokeWidth="4" />
          </svg>
        </Button>
        <Form.Control
          type="text"
          placeholder="Поиск по сайту..."
          onInput={w}
          onChange={w} />
      </InputGroup>
    </>
  )
}