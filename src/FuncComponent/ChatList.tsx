import { nanoid } from 'nanoid'
import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Chat } from '../App'

interface ChatListProps {
  chatList: Chat[]
  onAddChat: (chat: Chat) => void
}
export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (value) {
      onAddChat({
        id: nanoid(),
        name: value,
      })
      setValue('')
    }
  }
  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
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
