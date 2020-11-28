import './App.css';
import {Container} from 'reactstrap'
import {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  // stateとfunctionはcontextに移動された。
  const todos = []  // to avoid error
  const addTodo = () => {} // to avoid error 
  const todolistProps = {
    // todos, completeTodo, removeTodo // stateはあまり参照の連鎖を作らない方がいいのかもと思って直接渡すことにした。
    completeTodo : () => {} , removeTodo : () => {},
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
