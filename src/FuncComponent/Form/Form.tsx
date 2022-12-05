import { Message } from '../Message/Message';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

import React, { FC } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { selectChats } from '../../store/chats/selectors';
import { addMessageWithReply } from '../../store/chats/slice';
import { AddMessages, MessageList } from 'src/store/chats/types';
// import { Message } from 'src/store/chats/types'

import style from './Form.module.css';
interface formProps {
  chatId: string;
}

export const Form: FC<formProps> = ({ chatId }) => {
  const [message, setMessage] = useState({
    author: 'User',
    text: '',
  });

  const RBT_MSG = 'Hello.I am robot.';

  const chats = useSelector(selectChats);

  // const dispatch = useDispatch()
  const dispatch = useDispatch<ThunkDispatch<MessageList, void, any>>();

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      dispatch(addMessageWithReply({ chatId, message }));
    }
    setMessage({ ...message, text: '' });
  };

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     chats[chatId].length > 0 &&
  //     chats[chatId].slice(-1)[0].author !== 'Robot'
  //   ) {
  //     const time = new Date()
  //     const timeout = setTimeout(() => {
  //       setMessageList((prev) => {
  //         return {
  //           ...prev,
  //           [chatId]: [
  //             ...prev[chatId],
  //             {
  //               author: 'Robot',
  //               text: RBT_MSG,
  //               date: time.toLocaleTimeString(),
  //             },
  //           ],
  //         }
  //       })
  //     }, 1500)
  //     return () => {
  //       clearTimeout(timeout)
  //     }
  //   }
  // }, [messageList[chatId]])

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      {chats[chatId] ? (
        <Message chatId={chatId} />
      ) : (
        <div>Сообщений пока нет</div>
      )}
      <div className={style.formFunc}>
        <Input
          data={message.text}
          placeholder="Введите сообщение"
          onChange={(e) => setMessage({ ...message, text: e.target.value })}
        />
        <Button disabled={!message} />
      </div>
    </form>
  );
};
