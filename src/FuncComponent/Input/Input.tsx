import style from './Input.module.css'
import React, { FC } from 'react'
interface InputProps {
  placeholder?: string
  data?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ placeholder, data, onChange }) => {
  return (
    <input
      className={style.input}
      value={data}
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  )
}
