import { ComponentStory, ComponentMeta } from '@storybook/react';
import MidFooter, { IMidFooter } from './MidFooter';
import { mockMidFooterProps } from './MidFooter.mocks';

export default {
  title: 'templates/MidFooter',
  component: MidFooter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MidFooter>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MidFooter> = (args) => (
  <MidFooter {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMidFooterProps.base,
} as IMidFooter;