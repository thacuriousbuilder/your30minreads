import { ComponentStory, ComponentMeta } from '@storybook/react';
import TnCarousel, { ITnCarousel } from './TnCarousel';
import { mockTnCarouselProps } from './TnCarousel.mocks';

export default {
  title: 'templates/TnCarousel',
  component: TnCarousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TnCarousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TnCarousel> = (args) => (
  <TnCarousel {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTnCarouselProps.base,
} as ITnCarousel;