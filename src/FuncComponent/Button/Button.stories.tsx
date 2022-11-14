import React from 'react';
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    onButtonClick: { action: 'click' },
    data: {
      type: 'string',
      name: 'label',
      description: 'Вариант текста',
      defaultValue: 'Отправить',
    },
    disabled: {
      type: 'boolean',
      description: 'Активность кнопки',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
