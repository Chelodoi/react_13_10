import style from './Button.module.css';
import React from 'react';

export const Button = ({ disabled }) => {
  return (
    <button
      disabled={disabled}
      className={style.button}
      data-testid="button-element"
      onClick={() => console.log('click')}
    >
      Отправить
    </button>
  );
};
