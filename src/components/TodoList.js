import {useContext} from 'react';
import {Table, Button} from 'reactstrap';
import { TodosContext } from '../contexts/TodosContext';


const TodoList = () => {
    // props で伝搬していた代わりに、useContextを利用してContextから拾う
    const {todos, removeTodo, completeTodo} = useContext(TodosContext)

    return (
        <Table>
          <tbody>
            {todos && todos.map((todo, index) => (
              <tr key={index}>
                <th className="text-left"
                  style={{ textDecoration: todo.complete ? 'line-through': ''}}>
                  {todo.text}
                </th>
                <td className="text-right">
                  <Button color={ todo.complete ? "success" : "secondary" }
                    className="mr-2"
                    onClick={() => completeTodo(index)}>
                      {todo.complete ? '✔' : '　' }</Button>
                  <Button 
                    onClick={() => removeTodo(index)}
                    color="danger">削除</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>        
    );
}

export default TodoList;
