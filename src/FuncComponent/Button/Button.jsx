import style from './Button.module.css'
import React from 'react'

export const Button = ({ data, disabled }) => {
  return (
    <button disabled={disabled} className={style.button}>
      {data}
    </button>
  )
}
