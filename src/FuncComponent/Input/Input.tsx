import style from './Input.module.css'
import React, { FC, Dispatch, SetStateAction } from 'react'
interface InputProps {
  changeMessage: Dispatch<SetStateAction<Message>>
  placeholder?: string
  data?: string
}
interface Message {
  author: string
  text: string
  date: string
}

export const Input: FC<InputProps> = ({ changeMessage, placeholder, data }) => {
  function changeInput(ev: React.ChangeEvent<HTMLInputElement>) {
    changeMessage((p) => ({ ...p, text: ev.target.value }))
  }
  return (
    <input
      className={style.input}
      value={data}
      placeholder={placeholder}
      type="text"
      onChange={changeInput}
    />
  )
}
