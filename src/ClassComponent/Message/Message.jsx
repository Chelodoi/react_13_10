import style from './Message.module.css'
import React from 'react'

export class Message extends React.Component {
  render() {
    return (
      <h1 className={style.message}>
        Hello {this.props.text}. It's your first react app with Class component
      </h1>
    )
  }
}
