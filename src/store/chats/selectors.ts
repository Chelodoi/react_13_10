import { StoreState } from '..'

export const selectChats = (store: StoreState) => {
  if (store.chats) {
    return store.chats
  }
}

export const selectChatList = (store: StoreState) => {
  return Object.entries(store.chats).map((chat) => ({
    id: chat[0],
    name: chat[1].name,
  }))
}

export const selectMessages = (store: StoreState, chatId: string) =>
  Object.entries(store.chats[chatId].messageList)
    .filter((item) => item[0] != 'empty')
    .map((message) => ({
      ...message[1],
    }))
