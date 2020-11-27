import './App.css';
import {Container, Form, Input, InputGroup, InputGroupAddon, Button} from 'reactstrap'
import {useState} from 'react';

function App() {
  // 左辺、カーリーブレイスではない。
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log(value)
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
