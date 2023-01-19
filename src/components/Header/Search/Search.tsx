import { Key, useContext, useEffect, useState } from "react"
import { Accordion, Button, Container, Form, InputGroup } from "react-bootstrap"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Context } from "../../../context"
import { links } from "../../../links"
import { oglavlenie_menu } from "../../../oglavlenie_menu"
import { texts } from "../../../texts"

export const Search = () => {

  const { searchBlock, setSearchBlock, takeHasMore } = useContext<any>(Context)

  const [inputText, setInputText] = useState('')
  const [inputLength, setInputLength] = useState(0)
  const [activkey, setActivkey] =useState('1')

  useEffect(() => {
    inputLength > 3 && search_in_texts()
  }, [inputLength, activkey])

  let massiv = texts

  const search_in_texts = () => {
    const neo = massiv.map((item: string, index: number) => ((item.toLowerCase().search(inputText) >= 0) ? (
      <div key={index}>
        <h3><a href={links[index]}>{oglavlenie_menu[index]}</a></h3>
        <p>
          ...{item.split('').slice((item.search(inputText) < 20) ? item.search(inputText) : (item.search(inputText) - 20), item.search(inputText))}
          <a href={links[index]}>{inputText}</a>
          {item.split('').slice(item.search(inputText) + inputLength, item.search(inputText) + inputLength + 20)}... </p>
      </div>
    ) : <></>))
    setSearchBlock(
      <Accordion defaultActiveKey='5'>
        <Accordion.Item eventKey={activkey}>
          <Accordion.Body>{neo}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
    takeHasMore(false)
    setTimeout(()=>setActivkey('5'), 300)
    //console.log(neo)
  }

  const w = (event: any) => {
    let e = event.target.value
    setInputText(e.toLowerCase())
    setInputLength(e.length)
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
          onChange={w}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              search_in_texts()
            }
          }}
        />
      </InputGroup>
    </>
  )
}