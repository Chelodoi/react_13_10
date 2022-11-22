import { createStore, compose, combineReducers } from 'redux'
import { chatsReducer } from './chats/reducer'
import { MessageList } from './chats/types'
import { profileReducer, ProfileState } from './profile/reducer'

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface StoreState {
  profile: ProfileState
  chats: MessageList
}

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
  }),
  composeEnhancers()
)
