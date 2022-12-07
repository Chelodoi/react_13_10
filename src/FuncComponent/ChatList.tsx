import { nanoid } from 'nanoid'
import React, { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { chatsRef, getChatById } from 'src/services/firebase'

import { remove, push } from 'firebase/database'
// import { deleteChat } from '../store/chats/action'
import { selectChatList } from '../store/chats/selectors'

export interface Chat {
  id: string
  name: string
}

export const ChatList: FC = () => {
  const [value, setValue] = useState('')
  // const [chats, setChats] = useState<Chat[]>()

  // useEffect(() => {
  //   onValue(chatsRef, (chatsnap) => {
  //     const newChats: Chat[] = []
  //     chatsnap.forEach((snapshot) => {
  //       newChats.push(snapshot.val())
  //     })
  //     setChats(newChats)
  //   })
  // }, [])

  // const dispatch = useDispatch()

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      // dispatch(addChat(value))
      const id = nanoid()
      push(chatsRef, {
        id,
        name: value,
        messageList: {
          empty: true,
        },
      })
      setValue('')
    }
  }

  const handleDeleteChat = (id: string) => {
    remove(getChatById(id))
  }

  return (
    <>
      <ul>
        {chatList &&
          chatList.map((chat) => (
            <li key={chat.id}>
              <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
              <button onClick={() => handleDeleteChat(chat.id)}>x</button>
            </li>
          ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
    </>
  )
}
