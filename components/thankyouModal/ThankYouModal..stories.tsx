import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThankYouModal, { IThankYouModal } from './ThankYouModal';
import { mockThankYouModalProps } from './ThankYouModal.mocks';

export default {
  title: 'templates/ThankYouModal',
  component: ThankYouModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThankYouModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThankYouModal> = (args) => (
  <ThankYouModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThankYouModalProps.base,
} as IThankYouModal;