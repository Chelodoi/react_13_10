import React, { FC } from 'react'
import { ChatList } from '../FuncComponent/ChatList'
import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../FuncComponent/Form/Form'
import { Chat, MessageList } from '../App'

interface ChatsProps {
  messageList: MessageList
  setMessageList: React.Dispatch<React.SetStateAction<MessageList>>
  chatList: Chat[]
  onAddChat: (chat: Chat) => void
}

export const Chats: FC<ChatsProps> = ({
  chatList,
  messageList,
  setMessageList,
  onAddChat,
}) => {
  const { chatId } = useParams()

  if (chatId && !messageList[chatId]) {
    return <Navigate replace to="/chats" />
  }

  return (
    <>
      <ChatList chatList={chatList} onAddChat={onAddChat} />
      <Form
        chatId={chatId ? chatId : ''}
        messageList={messageList}
        setMessageList={setMessageList}
      />
    </>
  )
}
