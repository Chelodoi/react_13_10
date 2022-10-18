import style from './Message.module.css'

export const Message = (props) => {
  return (
    <h1 className={style.message}>
      Hello {props.text}. It's your first react app with Func component
    </h1>
  )
}
