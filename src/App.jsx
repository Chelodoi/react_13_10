import { Message as FuncMessage } from './FuncComponent/Message/Message'
import { Message as ClassMessage } from './ClassComponent/Message/Message'

export const App = () => {
  const [name, setName] = 'wqeqe'
  return (
    <>
      <ClassMessage text={name} />
      <ClassInput changeName={setName} />
      <hr />
      <FuncMessage text={name} />
      <FuncInput changeName={setName} />
    </>
  )
}
