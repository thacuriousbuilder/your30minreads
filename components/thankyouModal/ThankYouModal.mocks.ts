import {IThankYouModal} from './ThankYouModal'

const base: IThankYouModal = {
onClose:()=> console.log("close")
};

export const mockThankYouModalProps = {
  base,
};