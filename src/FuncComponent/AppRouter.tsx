import React, { FC, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Articles } from 'src/pages/Articles'

import { Chats as ChatsComponent } from 'src/pages/Chats'
import { ExampleConnectFunction } from 'src/pages/ExampleConnect'
import { Home } from 'src/pages/Home'
import { Profile } from 'src/pages/Profile'
import { ChatList } from './ChatList'
import { Header } from './Header'

const Chats = React.lazy(() =>
  Promise.all([
    import('src/pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
)

export const AppRouter: FC = () => {
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
            <Route path="articles" element={<Articles />}></Route>
          </Route>
          <Route path="*" element={<h2>404</h2>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
