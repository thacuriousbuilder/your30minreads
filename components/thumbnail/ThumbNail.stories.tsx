import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThumbNail, { IThumbNail } from './ThumbNail';
import { mockThumbNailProps } from './ThumbNail.mocks';

export default {
  title: 'templates/ThumbNail',
  component: ThumbNail,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThumbNail>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThumbNail> = (args) => (
  <ThumbNail {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThumbNailProps.base,
} as IThumbNail;