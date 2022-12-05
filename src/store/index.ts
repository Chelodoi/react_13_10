import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
// import { chatsReducer } from './chats/reducer'
import { MessageList } from './chats/types'
import { ProfileState } from './profile/reducer'
import thunk from 'redux-thunk'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  REGISTER,
  PURGE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { profileReducer } from './profile/slice'
import { chatsReducer } from './chats/slice'

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface StoreState {
  profile: ProfileState
  chats: MessageList
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
}

const rootReducer = combineReducers<StoreState>({
  profile: profileReducer,
  chats: chatsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunk))
// )

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)
