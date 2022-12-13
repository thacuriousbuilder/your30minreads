import { ComponentStory, ComponentMeta } from '@storybook/react';
import SmallBook, { ISmallBook } from './SmallBook';
import { mockSmallBookProps } from './SmallBook.mocks';

export default {
  title: 'templates/SmallBook',
  component: SmallBook,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SmallBook>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SmallBook> = (args) => (
  <SmallBook {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSmallBookProps.base,
} as ISmallBook;