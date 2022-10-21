import style from './Message.module.css'

export const Message = (props) => {
  return (
    <div className={style.message}>
      {props.messages.map((item) => (
        <div
          className={style.messageBlock}
          // item.author === 'Robot' ? style.messageBlockRobot : null)
        >
          <div className={style.messageBlockTop}>
            <span className={style.messageAuthor}>{item.author}</span>
            <span className={style.messageDate}>{item.date}</span>
          </div>
          <div className={style.messageText}>{item.text}</div>
        </div>
      ))}
    </div>
  )
}
