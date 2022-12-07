import React, { FC, useEffect } from 'react'
import { ChatList } from '../FuncComponent/ChatList'
import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../FuncComponent/Form/Form'
import { useSelector } from 'react-redux'
import { selectChats } from '../store/chats/selectors'
import { onValue, push } from 'firebase/database'
import { getChatById, getMessagesById } from 'src/services/firebase'

export const Chats: FC = () => {
  const chats = useSelector(selectChats)
  const { chatId } = useParams()

  // useEffect(() => {
  //   if (chatId) {
  //     onValue(getChatById(chatId), (snapshot) => {
  //       const chat = snapshot.val()
  //       const lastMessage: any = Object.entries(chat.messageList)[
  //         Object.entries(chat.messageList).length - 2
  //       ]
  //       const time = new Date()
  //       console.log(lastMessage)
  //       if (lastMessage.author !== 'Robot') {
  //         push(getMessagesById(chatId), {
  //           author: 'Robot',
  //           text: 'Chuvaaaaak',
  //           date: time.toLocaleTimeString(),
  //         })
  //       }
  //     })
  //   }
  // }, [])

  if (chatId && chats && !chats[chatId]) {
    return <Navigate replace to="/chats" />
  }

  return (
    <>
      <ChatList />
      <Form chatId={chatId ? chatId : ''} />
    </>
  )
}
