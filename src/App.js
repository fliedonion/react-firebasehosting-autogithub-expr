import './App.css';
import {Container} from 'reactstrap'
import {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodosContextProvider from './contexts/TodosContext';

function App() {

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>

        <TodosContextProvider>
          <TodoForm></TodoForm>
          <TodoList></TodoList>
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
