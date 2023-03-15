import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReadingHeader, { IReadingHeader } from './ReadingHeader';
import { mockReadingHeaderProps } from './ReadingHeader.mocks';

export default {
  title: 'templates/ReadingHeader',
  component: ReadingHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ReadingHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ReadingHeader> = (args) => (
  <ReadingHeader {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockReadingHeaderProps.base,
} as IReadingHeader;