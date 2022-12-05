import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { addChat, deleteChat } from 'src/store/chats/slice';
// import { deleteChat } from '../store/chats/action'
import { selectChatList } from '../store/chats/selectors';

export const ChatList: FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(addChat(value));
      const src = 'value';
      setValue('');
      return <Navigate replace to={`/${src}`} />;
    }
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>x</button>
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
  );
};
