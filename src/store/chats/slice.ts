import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit'
import { AddMessage, Message, MessageList } from './types'
import { onValue, push } from 'firebase/database'
import { chatsRef, getMessagesById, userRef } from 'src/services/firebase'

export interface ChatState {
  [key: string]: {
    id: string
    name: string
    messageList: {
      [key: string]: Message
    }
  }
}

const initialState: ChatState = {}

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    // addMessage: (state, action: PayloadAction<any>) => {
    //   const { chatId, message } = action.payload
    //   const time = new Date()
    //   push(getMessagesById(chatId), {
    //     ...message,
    //     date: time.toLocaleTimeString(),
    //   })
    // },
    // setMessages: (state, action: PayloadAction<ChatState>) => {
    //   const { chatId, messages } = action.payload
    //   state.chat[chatId].messageList = messages
    // },
    // deleteChat: (state, action: PayloadAction<string>) => {
    //   delete state[action.payload]
    // },
    // addMessage: (state, action: PayloadAction<AddMessage>) => {
    //   const time = new Date()
    //   state[action.payload.chatId].push({
    //     author: action.payload.message.author,
    //     date: time.toLocaleTimeString(),
    //     text: action.payload.message.text,
    //   })
    // },
    setStore: (state, action: PayloadAction<ChatState>) => {
      const newStore = action.payload
      return { ...newStore }
    },
  },
})

export const getChats = createAsyncThunk(
  'chats/getChats',
  (_, { dispatch }) => {
    onValue(chatsRef, (snapshot) => {
      dispatch(setStore(snapshot.val()))
    })
  }
)

// let timeout: NodeJS.Timeout
// export const addMessageWithReply = createAsyncThunk(
//   'chats/addMessageWithReply',
//   async (
//     { chatId, message }: { chatId: string; message: Message },
//     { dispatch }
//   ) => {
//     dispatch(addMessage({ chatId, message }))

// if (message.author !== 'Robot') {
//   if (timeout) {
//     clearTimeout(timeout)
//   }

//   timeout = setTimeout(() => {
//     dispatch(
//       addMessage({
//         chatId,
//         message: {
//           author: 'Robot',
//           text: 'Hello, motherfucker',
//         },
//       })
//     )
//   }, 1500)
// }
//   }
// )

// const addMessageWithReply = () => async (dispatch) => {
//   dispatch(usersLoading());
//   const response = await usersAPI.fetchAll();
//   dispatch(usersReceived(response.data));
// };

export const { setStore } = chatsSlice.actions

export const chatsReducer = chatsSlice.reducer
