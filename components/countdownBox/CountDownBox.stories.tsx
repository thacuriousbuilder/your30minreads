import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CountDownBox, ICountDownBox } from './CountDownBox';
import { mockCountDownBoxProps } from './CountDownBox.mocks';

export default {
  title: 'templates/CountDownBox',
  component: CountDownBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CountDownBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CountDownBox> = (args) => (
  <CountDownBox {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCountDownBoxProps.base,
} as ICountDownBox;