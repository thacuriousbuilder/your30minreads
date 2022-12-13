export interface IButton {
    placeholder: string;
    onClick:()=>void
  }
  
  const Button: React.FC<IButton> = ({ placeholder,onClick }) => {
    return(
      <div>
        <button className="bg-color-200 h-10 w-32 rounded-lg text-white font-bold"  onClick={()=> onClick()}>{placeholder}</button>
      </div>
    )
  };
  
  export default Button;