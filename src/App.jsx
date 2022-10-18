import { Message as FuncMessage } from './FuncComponent/Message/Message'
import { Message as ClassMessage } from './ClassComponent/Message/Message'
import { Input as FuncInput } from './FuncComponent/Input/Input'
import { Input as ClassInput } from './ClassComponent/Input/Input'
import { useState } from 'react'

export const App = () => {
  const [nameClass, setNameClass] = useState('Maksim')
  const [nameFunc, setNameFunc] = useState('Vitalik')
  return (
    <>
      <ClassMessage text={nameClass} />
      <ClassInput changeName={setNameClass} />
      <hr />
      <FuncMessage text={nameFunc} />
      <FuncInput changeName={setNameFunc} />
    </>
  )
}
