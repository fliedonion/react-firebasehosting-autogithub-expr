import './App.css';
import {Container, Form, Input, InputGroup, InputGroupAddon, Button, Table} from 'reactstrap'
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
    const newTodos = [...todos, {text, complete: false}]
    setTodos(newTodos)
    console.log(newTodos)
  }
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
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
      <Container>
        <Table>
          <tbody>
            {todos && todos.map((todo, index) => (
              <tr key={index}>
                <th className="text-left"
                  style={{ textDecoration: todo.complete ? 'line-through': ''}}>
                  {todo.text}
                </th>
                <td className="text-right">
                  <Button color={ todo.complete ? "secondary" : "success" }
                    className="mr-2"
                    onClick={() => completeTodo(index)}>
                      {todo.complete ? '完了' : '未' }</Button>
                  <Button 
                    onClick={() => removeTodo(index)}
                    color="danger">削除</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    </div>
  );
}

export default App;
