import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalPopUp, { IModalPopUp } from './ModalPopUp';
import { mockModalPopUpProps } from './ModalPopUp.mocks';

export default {
  title: 'templates/ModalPopUp',
  component: ModalPopUp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ModalPopUp>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalPopUp> = (args) => (
  <ModalPopUp {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockModalPopUpProps.base,
} as IModalPopUp;