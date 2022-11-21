import style from './Message.module.css';
import React, { FC } from 'react';
import { nanoid } from 'nanoid';
import { MessageList } from '../../App';
interface Message {
  author: string;
  text: string;
  date: string;
}
interface MessageProps {
  messages: MessageList;
  chatId: string;
}
export const Message: FC<MessageProps> = ({ messages, chatId }) => {
  return (
    <div className={style.message}>
      {messages[chatId].map((item) => (
        <div key={nanoid()} className={style.messageBlock}>
          <div className={style.messageBlockTop}>
            <span className={style.messageAuthor}>{item.author}</span>
            <span className={style.messageDate}>{item.date}</span>
          </div>
          <div className={style.messageText}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};
