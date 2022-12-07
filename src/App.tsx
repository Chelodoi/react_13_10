import React, { FC } from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import { AppRouter } from './FuncComponent/AppRouter'
import { persistor, store } from './store'

export const App: FC = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <AppRouter />
      {/* </PersistGate> */}
    </Provider>
  )
}
