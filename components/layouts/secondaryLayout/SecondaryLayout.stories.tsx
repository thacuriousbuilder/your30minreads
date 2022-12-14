import { ComponentStory, ComponentMeta } from '@storybook/react';
import SecondaryLayout, { ISecondaryLayout } from './SecondaryLayout';
import { mockSecondaryLayoutProps } from './SecondaryLayout.mocks';

export default {
  title: 'templates/SecondaryLayout',
  component: SecondaryLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecondaryLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondaryLayout> = (args) => (
  <SecondaryLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSecondaryLayoutProps.base,
} as ISecondaryLayout;