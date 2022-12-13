import { IButton } from './Button';

const base: IButton = {
  placeholder: 'Read Now!',
  onClick() {
    return alert('Hey I was clicked!')
  },
};

export const mockButtonProps = {
  base,
};