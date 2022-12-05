import { Dispatch } from 'redux';
import {
  AddChat,
  AddMessage,
  Message,
  DeleteChat,
  AddMessageWithReply,
} from './types';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addChat: AddChat = (chatName) => ({
  type: ADD_CHAT,
  chatName,
});

export const deleteChat: DeleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

// export const addMessage: AddMessage = (chatId, message) => ({
//   type: ADD_MESSAGE,
//   chatId,
//   message,
// })

// let timeout: NodeJS.Timeout

// export const addMessageWithReply: AddMessageWithReply =
//   (chatId, message) => (dispatch) => {

//     dispatch(addMessage(chatId, message))

//     if (message.author !== 'Robot') {

//       if (timeout) {
//         clearTimeout(timeout)
//       }

//       timeout = setTimeout(() => {
//         dispatch(
//           addMessage(chatId, {
//             author: 'Robot',
//             text: 'Hello, motherfucker',
//           })
//         )
//       }, 1500)
//     }
//   }
