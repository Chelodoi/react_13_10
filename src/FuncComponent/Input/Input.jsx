import { useRef, useEffect } from 'react'
import style from './Input.module.css'
export const Input = ({
  changeAuthor,
  changeMessage,
  placeholder,
  data,
  focus,
}) => {
  useEffect(() => {
    ref.current?.focus()
  }, [focus])

  function changeInput(ev) {
    changeAuthor
      ? changeAuthor((p) => ({ ...p, author: ev.target.value }))
      : changeMessage((p) => ({ ...p, text: ev.target.value }))
  }
  const ref = useRef(null)

  return (
    <input
      className={style.input}
      value={data}
      placeholder={placeholder}
      type="text"
      onChange={changeInput}
      ref={ref}
    />
  )
}
