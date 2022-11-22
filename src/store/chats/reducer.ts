import { ChatsActions, MessageList } from './types'
import { Reducer } from 'redux'
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './action'
import { nanoid } from 'nanoid'

const initialState: MessageList = {
  gb: [{ author: 'User comp', text: 'Hello', date: '21/01/1998' }],
}

export const chatsReducer: Reducer<MessageList, ChatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      }
    }
    case DELETE_CHAT: {
      const chats = { ...state }
      delete chats[action.chatId]
      return chats
    }
    case ADD_MESSAGE: {
      const time = new Date()
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            author: 'User',
            date: time.toLocaleTimeString(),
            text: action.message,
          },
        ],
      }
    }
    default:
      return state
  }
}
