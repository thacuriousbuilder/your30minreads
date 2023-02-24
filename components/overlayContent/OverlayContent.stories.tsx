import { ComponentStory, ComponentMeta } from '@storybook/react';
import OverlayContent, { IOverlayContent } from './OverlayContent';
import { mockOverlayContentProps } from './OverlayContent.mocks';

export default {
  title: 'templates/OverlayContent',
  component: OverlayContent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof OverlayContent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OverlayContent> = (args) => (
  <OverlayContent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockOverlayContentProps.base,
} as IOverlayContent;