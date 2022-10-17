import { Form } from './components/Form/Form'
import './index.css'
import { Count } from './components/Count'
import { Child } from './components/Child'
import { Form as FormClass } from './class-components/Form'
import { Count as CountClass } from './class-components/Count'
import { useState } from 'react'

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }
  return (
    <div className="App">
      <h2 style={{ backgroundColor: 'green' }}>Func Component</h2>
      <CountClass count={10} />
      <hr />
      <FormClass />
      <h2>Class Component</h2>
      <Count name="geekbrains" />
      <hr />
      <h3>Parent component</h3>
      <p>{count}</p>
      <input onChange={handleChangeName} />
      <h3>Child component</h3>
      <Child name={name} handleChangeCount={setCount} />
      {arr.map((el, idx) => {
        return <div key={idx}>{el}</div>
      })}
      <Form />
    </div>
  )
}
