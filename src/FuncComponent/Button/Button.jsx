import style from './Button.module.css'
import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ data, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={style.button}
      data-testid="button-element"
      onClick={() => console.log('click')}
    >
      Отправить
      {/* {data} */}
    </button>
  )
}
