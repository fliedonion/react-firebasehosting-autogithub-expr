
import {Table, Button} from 'reactstrap';


const TodoList = ({todos, removeTodo, completeTodo}) => {


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
