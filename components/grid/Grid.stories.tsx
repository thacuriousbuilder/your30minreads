import { ComponentStory, ComponentMeta } from '@storybook/react';
import Grid, { IGrid } from './Grid';
import { mockGridProps } from './Grid.mocks';

export default {
  title: 'templates/Grid',
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockGridProps.base,
} as IGrid;