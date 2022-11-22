import React, { FC } from 'react'
import { ChatList } from '../FuncComponent/ChatList'
import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../FuncComponent/Form/Form'
import { useSelector } from 'react-redux'
import { selectChats } from '../store/chats/selectors'

export interface Chat {
  id: string
  name: string
}

export const Chats: FC = () => {
  const { chatId } = useParams()

  const chats = useSelector(selectChats)

  if (chatId && !chats[chatId]) {
    return <Navigate replace to="/chats" />
  }

  return (
    <>
      <ChatList />
      <Form chatId={chatId ? chatId : ''} />
    </>
  )
}
