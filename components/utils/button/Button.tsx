export interface IButton {
    placeholder: string;
    onClick:()=>void;
    style:string
  }
  
  const Button: React.FC<IButton> = ({ placeholder,onClick,style }) => {
    return(
      <div>
        <button className={style}  onClick={()=> onClick()}>{placeholder}</button>
      </div>
    )
  };
  
  export default Button;