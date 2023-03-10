import { ComponentStory, ComponentMeta } from '@storybook/react';
import EbookContainer, { IEtest } from './EbookContainer';
import { mockEbookContainerProps } from './EbookContainer.mocks';

export default {
  title: 'templates/EbookContainer',
  component: EbookContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EbookContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EbookContainer> = (args) => (
  <EbookContainer {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockEbookContainerProps.base,
} as IEtest;