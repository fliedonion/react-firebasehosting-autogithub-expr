import {useState} from 'react';

import {Form, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'

const TodoForm = ({addTodo}) => {
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
