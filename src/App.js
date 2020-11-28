import './App.css';
import {Container} from 'reactstrap'
import {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // 左辺、カーリーブレイスではない。
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, {text, complete: false}]
    setTodos(newTodos)
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
  const todolistProps = {
    // todos, completeTodo, removeTodo // stateはあまり参照の連鎖を作らない方がいいのかもと思って直接渡すことにした。
    completeTodo, removeTodo,
  }

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodoForm addTodo={addTodo}></TodoForm>
      </Container>
      <Container>
        <TodoList todos={todos} {...todolistProps}></TodoList>
      </Container>
    </div>
  );
}

export default App;
