export interface IButton {
    sampleTextProp: string;
  }
  
  const Button: React.FC<IButton> = ({ sampleTextProp }) => {
    return <div className="bg-gradient-to-r from-cyan-500 to-blue-500 font-bold" >{sampleTextProp}</div>;
  };
  
  export default Button;