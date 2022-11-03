import { Message } from '../Message/Message';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';
import style from './Form.module.css';
import React from 'react';

export const Form = () => {
  const [message, setMessage] = useState({
    author: '',
    text: '',
    date: '',
  });
  const [messageList, setMessageList] = useState([]);
  const RBT_MSG = 'Hello.I am robot.';

  const handleClick = (e) => {
    e.preventDefault();

    const time = new Date();
    setMessageList((prev) => [
      ...prev,
      { ...message, date: time.toLocaleTimeString() },
    ]);
    setMessage({
      author: '',
      text: '',
      date: '',
    });
  };

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Robot') {
      const time = new Date();
      const timeout = setTimeout(() => {
        setMessageList((prev) => [
          ...prev,
          { author: 'Robot', text: RBT_MSG, date: time.toLocaleTimeString() },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messageList]);

  return (
    <form className={style.form} action="" onSubmit={handleClick}>
      <Message messages={messageList} />
      <div className={style.formFunc}>
        <Input
          data={message.author}
          placeholder="Введите имя"
          changeAuthor={setMessage}
        />
        <Input
          data={message.text}
          placeholder="Введите сообщение"
          changeMessage={setMessage}
        />
        <Button
          data={'Отправить'}
          disabled={!message.author || !message.text}
        />
      </div>
    </form>
  );
};
