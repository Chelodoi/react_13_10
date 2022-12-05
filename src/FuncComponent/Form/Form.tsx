import { Message } from '../Message/Message'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'

import React, { FC } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { selectChats } from '../../store/chats/selectors'
import { addMessageWithReply } from '../../store/chats/slice'
import { AddMessages, MessageList } from 'src/store/chats/types'

import style from './Form.module.css'
interface formProps {
  chatId: string
}

export const Form: FC<formProps> = ({ chatId }) => {
  const [message, setMessage] = useState({
    author: 'User',
    text: '',
  })

  const chats = useSelector(selectChats)

  const dispatch = useDispatch<ThunkDispatch<MessageList, void, any>>()

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (chatId) {
      dispatch(addMessageWithReply({ chatId, message }))
    }
    setMessage({ ...message, text: '' })
  }

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      {chats[chatId] ? (
        <Message chatId={chatId} />
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
