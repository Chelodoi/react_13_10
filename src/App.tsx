import React, { FC, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChatList } from './FuncComponent/ChatList'
import { Header } from './FuncComponent/Header'
import { Chats as ChatsComponent } from './pages/Chats'
import { ExampleConnect, ExampleConnectFunction } from './pages/ExampleConnect'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

const Chats = React.lazy(() =>
  import('./pages/Chats').then((module) => ({
    default: module.Chats,
  }))
)

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<ChatsComponent />} />
            </Route>
            <Route
              path="exampleConect"
              element={<ExampleConnectFunction />}
            ></Route>
          </Route>
          <Route path="*" element={<h2>404</h2>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
