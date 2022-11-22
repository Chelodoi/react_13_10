import style from './Message.module.css'
import React, { FC } from 'react'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { selectChats } from 'src/store/chats/selectors'

interface MessageProps {
  chatId: string
}
export const Message: FC<MessageProps> = ({ chatId }) => {
  const chats = useSelector(selectChats)
  return (
    <div className={style.message}>
      {chats[chatId].map((item) => (
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
