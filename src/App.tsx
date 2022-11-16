import { nanoid } from 'nanoid'
import React, { FC, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ChatList } from './FuncComponent/ChatList'
import { Message } from './FuncComponent/Form/Form'
import { Header } from './FuncComponent/Header'
import { Chats } from './pages/Chats'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

export interface Chat {
  id: string
  name: string
}
export interface MessageList {
  [key: string]: Message[]
}

const initialMessage: MessageList = {
  default: [{ author: 'User comp', text: 'Hello', date: '21/01/1998' }],
}

export const App: FC = () => {
  const [messageList, setMessageList] = useState<MessageList>(initialMessage)

  const chatList = Object.entries(messageList).map((chat) => ({
    id: nanoid(),
    name: chat[0],
  }))

  const onAddChat = (chat: Chat) => {
    setMessageList({ ...messageList, [chat.name]: [] })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="chats">
            <Route
              index
              element={<ChatList chatList={chatList} onAddChat={onAddChat} />}
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messageList={messageList}
                  setMessageList={setMessageList}
                  chatList={chatList}
                  onAddChat={onAddChat}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404</h2>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
