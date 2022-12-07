import style from './Message.module.css'
import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { Message as MessageType } from 'src/store/chats/types'

interface MessageProps {
  messages: MessageType[]
}
export const Message: FC<MessageProps> = ({ messages }) => {
  return (
    <div className={style.message}>
      {messages.map((item) => (
        <div key={nanoid()} className={style.messageBlock}>
          <div className={style.messageBlockTop}>
            <span className={style.messageAuthor}>{item.author}</span>
            <span className={style.messageDate}>{item.date}</span>
          </div>
          <div className={style.messageText}>{item.text}</div>
        </div>
      ))}
    </div>
  )
}
