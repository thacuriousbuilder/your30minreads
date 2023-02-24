import { ComponentStory, ComponentMeta } from '@storybook/react';
import BigBook, { IBigBook } from './BigBook';
import { mockBigBookProps } from './BigBook.mocks';

export default {
  title: 'templates/BigBook',
  component: BigBook,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BigBook>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BigBook> = (args) => (
  <BigBook {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBigBookProps.base,
} as IBigBook;