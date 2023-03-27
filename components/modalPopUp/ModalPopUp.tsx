export interface IModalPopUp {
    isOpen: boolean;
    children: any;
    style:string;
  }
  
  const ModalPopUp: React.FC<IModalPopUp> = ({ isOpen, children,style }) => {
    const modalStyles = isOpen
      ? 'fixed  top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-60 z-10 '
      : 'hidden';
  
    return (
      <div className={modalStyles}>
        {isOpen && (
          <div className={style}>
            {children}
          </div>
        )}
      </div>
    );
  };
  
  export default ModalPopUp;




