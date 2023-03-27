import { RxCrossCircled } from "react-icons/rx";

export interface IThankYouModal {
  onClose: () => void;
}

const ThankYouModal: React.FC<IThankYouModal> = ({ onClose }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="relative z-10 inline-block max-w-md p-6 my-8 text-left align-middle bg-secondary-bg shadow-xl rounded-lg">
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-900 focus:outline-none">
              <RxCrossCircled size={30} color='orange'/>
            </button>
          </div>

          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg font-semibold leading-6 text-white">Step into a new world!</h3>
            <div className="mt-2">
              <p className="text-sm text-white">{`Thank you for joining our waitlist! You'll receive an email from us soon with updates on our official launch and new books.`}</p>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <button onClick={onClose} type="button" className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-base font-medium text-black focus:outline-none sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;