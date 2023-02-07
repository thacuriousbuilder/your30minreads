export interface IHeaderBanner {
    text: string;
    style: string;
  }
  
  const HeaderBanner: React.FC<IHeaderBanner> = ({ text,style }) => {
    return(
        <div className={style} >
          <div className="text-xs ml-4 mt-16 font-semibold w-auto">{text}</div>
        </div>
    )
  };
  
  export default HeaderBanner;