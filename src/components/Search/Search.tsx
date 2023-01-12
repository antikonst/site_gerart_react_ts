import { Button, Form, InputGroup } from "react-bootstrap"

export const Search = () => {
  return (
    <InputGroup>
      <Button variant="outline-secondary">
        <svg width="40" height="40">
          <circle cx="23" cy="17" r="15" stroke="#267cb5" strokeWidth="4" fillOpacity="0" />
          <path d="M0 40 L12 28" stroke="#267cb5" strokeWidth="4" />
        </svg>
      </Button>
      <Form.Control
        type="text"
        placeholder="Поиск по сайту..."
      />
    </InputGroup>
  )
}