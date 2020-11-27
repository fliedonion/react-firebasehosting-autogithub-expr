import './App.css';
import {Container, Form, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'
import {useState} from 'react';

function App() {
  // 左辺、カーリーブレイスではない。
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
  }
  const addTodo = text => {
    const newTodos = [...todos, text]
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input type="text" 
              value={value}
              onChange={e => setValue(e.target.value)} />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="primary">追加</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
