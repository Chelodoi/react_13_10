import { Message as FuncMessage } from '../Message/Message'
import { Input as FuncInput } from '../Input/Input'
import { Button } from '../Button/Button'
import { useEffect, useState } from 'react'
import style from './Form.module.css'

export const Form = () => {
  const [message, setMessage] = useState({
    author: '',
    text: '',
    date: '',
  })
  const [messageList, setMessageList] = useState([])
  const RBT_MSG = 'Hello.I am robot.'

  const handleClick = (e) => {
    e.preventDefault()

    const time = new Date()
    setMessageList((prev) => [
      ...prev,
      { ...message, date: time.toLocaleTimeString() },
    ])
    setMessage({
      author: '',
      text: '',
      date: '',
    })
  }

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Robot') {
      const time = new Date()
      setTimeout(() => {
        setMessageList((prev) => [
          ...prev,
          { author: 'Robot', text: RBT_MSG, date: time.toLocaleTimeString() },
        ])
      }, 1500)
    }
  }, [messageList])

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      <FuncMessage messages={messageList} />
      <div className={style.formFunc}>
        <FuncInput
          data={message.author}
          placeholder="Имя"
          changeAuthor={setMessage}
        />
        <FuncInput
          data={message.text}
          placeholder="Введите сообщение"
          changeMessage={setMessage}
        />
        <Button />
      </div>
    </form>
  )
}
