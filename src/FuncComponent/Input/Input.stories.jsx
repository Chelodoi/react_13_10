import React from 'react';
import './Input.module.css';
import { Input } from './Input';

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
};
const Template = (args) => <Input {...args} />;

export const AuthorInput = Template.bind({});

AuthorInput.args = {
  placeholder: 'Введите имя',
};

export const MessageInput = Template.bind({});
MessageInput.args = {
  placeholder: 'Введите сообщение',
};
