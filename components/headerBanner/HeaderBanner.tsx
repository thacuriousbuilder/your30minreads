export interface IHeaderBanner {
    sampleTextProp: string;
    style: string;
  }
  
  const HeaderBanner: React.FC<IHeaderBanner> = ({ sampleTextProp,style }) => {
    return(
        <div className={style} >
          <div className="text-xs ml-4 mt-16 font-semibold w-auto">{sampleTextProp}</div>
        </div>
    )
  };
  
  export default HeaderBanner;