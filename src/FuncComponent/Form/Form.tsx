import { Message } from '../Message/Message'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import React, { FC, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { selectMessages } from '../../store/chats/selectors'
// import { addMessageWithReply } from '../../store/chats/slice'
import { MessageList } from 'src/store/chats/types'
import { onValue, push } from 'firebase/database'

import style from './Form.module.css'
import { chatsRef, getChatById, getMessagesById } from 'src/services/firebase'
import { ChatState } from 'src/store/chats/slice'
import { StoreState } from 'src/store'
import { clear } from 'console'
interface formProps {
  chatId: string
}

export const Form: FC<formProps> = ({ chatId }) => {
  const [message, setMessage] = useState({
    author: 'User',
    text: '',
  })
  const [messages, setMessages] = useState<MessageList>({})

  useEffect(() => {
    onValue(chatsRef, (snapshot) => {
      setMessages(snapshot.val())
    })
  }, [])

  useEffect(() => {
    if (chatId) {
      onValue(getChatById(chatId), (snapshot) => {
        const chat = snapshot.val()
        const lastMessage: any = Object.entries(chat.messageList)[
          Object.entries(chat.messageList).length - 2
        ][1]
        console.log(
          'Object.entries(chat.messageList)',
          Object.entries(chat.messageList)
        )

        const time = new Date()
        console.log('lastMessage', lastMessage)
        if (lastMessage.author !== 'Robot') {
          const timeout = setTimeout(() => {
            push(getMessagesById(chatId), {
              author: 'Robot',
              text: 'Chuvaaaaak',
              date: time.toLocaleTimeString(),
            })
          }, 1500)
        }
      })
    }
  }, [])

  const messagesState = useSelector((state: StoreState) =>
    selectMessages(state, chatId)
  )

  const dispatch = useDispatch<ThunkDispatch<ChatState, void, any>>()

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (chatId) {
      const time = new Date()
      push(getMessagesById(chatId), {
        ...message,
        date: time.toLocaleTimeString(),
      })
    }
    setMessage({ ...message, text: '' })
  }

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      {messages[chatId] ? (
        <Message messages={messagesState} />
      ) : (
        <div>Сообщений пока нет</div>
      )}
      <div className={style.formFunc}>
        <Input
          data={message.text}
          placeholder="Введите сообщение"
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <Button disabled={!message} />
      </div>
    </form>
  )
}
