import { Message } from '../Message/Message'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { useEffect, useState } from 'react'
import style from './Form.module.css'
import React, { FC } from 'react'

interface Message {
  author: string
  text: string
  date: string
}

export const Form: FC = () => {
  const [message, setMessage] = useState<Message>({
    author: '',
    text: '',
    date: '',
  })
  const [messageList, setMessageList] = useState<Message[]>([])
  const RBT_MSG = 'Hello.I am robot.'

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const time = new Date()
    setMessageList((prev) => [
      ...prev,
      { ...message, author: 'User', date: time.toLocaleTimeString() },
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
      const timeout = setTimeout(() => {
        setMessageList((prev) => [
          ...prev,
          { author: 'Robot', text: RBT_MSG, date: time.toLocaleTimeString() },
        ])
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messageList])

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      <Message messages={messageList} />
      <div className={style.formFunc}>
        <Input
          data={message.text}
          placeholder="Введите сообщение"
          changeMessage={setMessage}
        />
        <Button disabled={!message.text} />
      </div>
    </form>
  )
}
