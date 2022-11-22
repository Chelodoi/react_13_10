import { Message } from '../Message/Message'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { useEffect, useState } from 'react'
import style from './Form.module.css'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectChats } from '../../store/chats/selectors'
import { addMessage } from '../../store/chats/action'

interface formProps {
  chatId: string
}

export const Form: FC<formProps> = ({ chatId }) => {
  const [message, setMessage] = useState<string>('')

  const RBT_MSG = 'Hello.I am robot.'

  const chats = useSelector(selectChats)

  const dispatch = useDispatch()

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (chatId) {
      dispatch(addMessage(chatId, message))
    }
    setMessage('')
  }

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     chats[chatId].length > 0 &&
  //     chats[chatId].slice(-1)[0].author !== 'Robot'
  //   ) {
  //     const time = new Date()
  //     const timeout = setTimeout(() => {
  //       setMessageList((prev) => {
  //         return {
  //           ...prev,
  //           [chatId]: [
  //             ...prev[chatId],
  //             {
  //               author: 'Robot',
  //               text: RBT_MSG,
  //               date: time.toLocaleTimeString(),
  //             },
  //           ],
  //         }
  //       })
  //     }, 1500)
  //     return () => {
  //       clearTimeout(timeout)
  //     }
  //   }
  // }, [messageList[chatId]])

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      <Message chatId={chatId} />
      <div className={style.formFunc}>
        <Input
          data={message}
          placeholder="Введите сообщение"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button disabled={!message} />
      </div>
    </form>
  )
}
