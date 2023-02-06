import { IButton } from './Button';

const base: IButton = {
onClick(){
  alert('hey I was Clicked')
},
  style:"bg-secondary-bg h-10 w-32 rounded-lg text-white font-bold",
  placeholder:"Read Me now"
};

export const mockButtonProps = {
  base,
};