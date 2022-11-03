import React from 'react'
import './Input.module.css'
import { Input } from './Input'

export default {
  title: 'MyComponents/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'change' },
    data: {
      type: 'string',
      description: 'Text in message',
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder in message',
      options: ['Введите имя', 'Введите сообщение'],
      control: {
        type: 'radio',
      },
    },
  },
}
const Template = (args) => <Input {...args} />

export const authorInput = Template.bind({})

authorInput.args = {
  // data: '',
  placeholder: 'Введите имя',
}

export const messageInput = Template.bind({})
messageInput.args = {
  // data: '',
  placeholder: 'Введите сообщение',
}
