import {useState, useContext} from 'react'
import {Form, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'
import { TodosContext } from '../contexts/TodosContext'


const TodoForm = () => {
    // props で addTodo を受け取っていた代わりに、useContextを利用してContextから拾う
    const { addTodo } = useContext(TodosContext)

    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue(value)
    }

    return (
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
    );
}

export default TodoForm;
