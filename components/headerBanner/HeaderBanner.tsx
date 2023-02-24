export interface IHeaderBanner {
    text: string;
    style: string;
  }
  
  const HeaderBanner: React.FC<IHeaderBanner> = ({ text,style }) => {
    return(
        <div className={style} >
          <div className="text-9px xs:text-xs md:text-sm md:ml-4 lg:text-center ml-4 xs:mt-6 md:m-6 mt-8 font-semibold w-auto">{text}</div>
        </div>
    )
  };
  
  export default HeaderBanner;