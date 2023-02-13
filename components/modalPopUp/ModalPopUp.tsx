export interface IModalPopUp {
    sampleTextProp: string;
  }
  
  const ModalPopUP: React.FC<IModalPopUp> = ({ sampleTextProp }) => {
    return <div className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold" >{sampleTextProp}</div>;
  };
  
  export default ModalPopUP;