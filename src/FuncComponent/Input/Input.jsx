import style from './Input.module.css'
export const Input = ({ changeAuthor, changeMessage, placeholder, data }) => {
  function changeInput(ev) {
    changeAuthor
      ? changeAuthor((p) => ({ ...p, author: ev.target.value }))
      : changeMessage((p) => ({ ...p, text: ev.target.value }))
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
