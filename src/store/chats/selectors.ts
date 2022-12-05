import { nanoid } from 'nanoid';
import { StoreState } from '..';

export const selectChats = (store: StoreState) => store.chats;

export const selectChatList = (store: StoreState) =>
  Object.entries(store.chats).map((chat) => ({
    id: nanoid(),
    name: chat[0],
  }));
