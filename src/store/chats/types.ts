import { Dispatch } from 'redux'
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './action'

export type ChatsActions = ReturnType<AddChat> | ReturnType<DeleteChat>
// | ReturnType<AddMessage>

export type AddChat = (chatName: string) => {
  type: typeof ADD_CHAT
  chatName: string
}

export type DeleteChat = (chatId: string) => {
  type: typeof DELETE_CHAT
  chatId: string
}

// export type AddMessage = (
//   chatId: string,
//   message: Message
// ) => {
//   type: typeof ADD_MESSAGE
//   chatId: string
//   message: Message
// }
export type AddMessage = {
  chatId: string
  message: Message
}
export type AddMessages = {
  chatId: string
  message: {
    author: string
    text: string
    date: string
  }
}
export interface Message {
  author: string
  text: string
  date: string
}

export interface MessageList {
  [key: string]: Message[]
}

export type AddMessageWithReply = (
  chatId: string,
  message: Message
) => (dispatch: Dispatch) => void
