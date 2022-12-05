import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import { AddMessage, Message, MessageList } from './types';

const initialState: MessageList = {
  gb: [{ author: 'User comp', text: 'Hello', date: '21/01/1998' }],
};

let timeout: NodeJS.Timeout;

// const addMessageWithReply = () => async (dispatch) => {
//   dispatch(usersLoading());
//   const response = await usersAPI.fetchAll();
//   dispatch(usersReceived(response.data));
// };

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<string>) => {
      state[action.payload] = [];
    },
    deleteChat: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    addMessage: (state, action: PayloadAction<AddMessage>) => {
      const time = new Date();
      state[action.payload.chatId].push({
        author: action.payload.message.author,
        date: time.toLocaleTimeString(),
        text: action.payload.message.text,
      });
    },
  },
});

export const addMessageWithReply = createAsyncThunk(
  'chats/addMessageWithReply',
  async (
    { chatId, message }: { chatId: string; message: Message },
    { dispatch }
  ) => {
    dispatch(addMessage({ chatId, message }));

    if (message.author !== 'Robot') {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        dispatch(
          addMessage({
            chatId,
            message: {
              author: 'Robot',
              text: 'Hello, motherfucker',
            },
          })
        );
      }, 1500);
    }
  }
);

// const addMessageWithReply = () => async (dispatch) => {
//   dispatch(usersLoading());
//   const response = await usersAPI.fetchAll();
//   dispatch(usersReceived(response.data));
// };

export const { addChat, deleteChat, addMessage } = chatsSlice.actions;

export const chatsReducer = chatsSlice.reducer;
