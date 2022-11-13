// import style from './Button.module.css'
import React, { FC } from 'react'

interface ButtonProps {
  disabled: boolean
}
export const Button: FC<ButtonProps> = ({ disabled }) => {
  return (
    <button
      disabled={disabled}
      // className={style.button}
      data-testid="button-element"
    >
      Отправить
    </button>
  )
}
