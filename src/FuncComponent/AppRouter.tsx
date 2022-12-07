import React, { FC, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import { Articles } from 'src/pages/Articles'

import { Chats as ChatsComponent } from 'src/pages/Chats'
import { ExampleConnectFunction } from 'src/pages/ExampleConnect'
import { Home } from 'src/pages/Home'
import { Profile } from 'src/pages/Profile'
import { SignIn } from 'src/pages/SignIn'
import { SignUp } from 'src/pages/SignUp'
import { auth } from 'src/services/firebase'
import { getChats } from 'src/store/chats/slice'
import { MessageList } from 'src/store/chats/types'
import { changeAuth } from 'src/store/profile/slice'
import { ChatList } from './ChatList'
import { Header } from './Header'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const Chats = React.lazy(() =>
  Promise.all([
    import('src/pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
)

export const AppRouter: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<MessageList, void, any>>()

  useEffect(() => {
    dispatch(getChats())
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(changeAuth(true))
      } else {
        dispatch(changeAuth(false))
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route
              path="profile"
              element={<PrivateRoute component={<Profile />} />}
            ></Route>
            <Route path="chats" element={<PrivateRoute />}>
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<ChatsComponent />} />
            </Route>
            <Route
              path="exampleConect"
              element={<ExampleConnectFunction />}
            ></Route>
            <Route path="articles" element={<Articles />}></Route>
            <Route
              path="signup"
              element={<PublicRoute component={<SignUp />} />}
            ></Route>
            <Route
              path="signin"
              element={<PublicRoute component={<SignIn />} />}
            ></Route>
          </Route>
          <Route path="*" element={<h2>404</h2>}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
