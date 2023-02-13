import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalPopUP, { IModalPopUp } from './ModalPopUp';
import { mockModalPopUpProps } from './ModalPopUp.mocks';

export default {
  title: 'templates/ModalPopUP',
  component: ModalPopUP,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ModalPopUP>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalPopUP> = (args) => (
  <ModalPopUP {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockModalPopUpProps.base,
} as IModalPopUp;