import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookContent, { IBookContent } from './BookContent';
import { mockBookContentProps } from './BookContent.mocks';

export default {
  title: 'templates/BookContent',
  component: BookContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BookContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BookContent> = (args) => (
  <BookContent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBookContentProps.base,
} as IBookContent;