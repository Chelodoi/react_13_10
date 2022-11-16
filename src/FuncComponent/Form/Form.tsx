import { Message } from '../Message/Message'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { useEffect, useState } from 'react'
import style from './Form.module.css'
import React, { FC } from 'react'
import { MessageList } from '../../App'

interface formProps {
  chatId: string
  messageList: MessageList
  setMessageList: React.Dispatch<React.SetStateAction<MessageList>>
}
export interface Message {
  author: string
  text: string
  date: string
}

export const Form: FC<formProps> = ({
  chatId,
  messageList,
  setMessageList,
}) => {
  const [message, setMessage] = useState<Message>({
    author: '',
    text: '',
    date: '',
  })

  const RBT_MSG = 'Hello.I am robot.'

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const time = new Date()
    if (chatId) {
      setMessageList((prev) => {
        return {
          ...prev,
          [chatId]: [
            ...prev[chatId],
            { ...message, author: 'User', date: time.toLocaleTimeString() },
          ],
        }
      })
    }
    setMessage({
      author: '',
      text: '',
      date: '',
    })
  }

  useEffect(() => {
    if (
      chatId &&
      messageList[chatId].length > 0 &&
      messageList[chatId].slice(-1)[0].author !== 'Robot'
    ) {
      const time = new Date()
      const timeout = setTimeout(() => {
        setMessageList((prev) => {
          return {
            ...prev,
            [chatId]: [
              ...prev[chatId],
              {
                author: 'Robot',
                text: RBT_MSG,
                date: time.toLocaleTimeString(),
              },
            ],
          }
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messageList[chatId]])

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      <Message chatId={chatId} messages={messageList} />
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
