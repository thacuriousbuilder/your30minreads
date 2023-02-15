import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderBanner, { IHeaderBanner } from './HeaderBanner';
import { mockHeaderBannerProps } from './HeaderBanner.mocks';

export default {
  title: 'templates/HeaderBanner',
  component: HeaderBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeaderBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderBanner> = (args) => (
  <HeaderBanner {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeaderBannerProps.base,
} as IHeaderBanner;