export interface IGrid {
    num1: number;
    title1: string;
    subtext1:string;
    num2: number;
    title2: string;
    subtext2:string;
    num3: number;
    title3: string;
    subtext3:string;
  }
  
  const Grid: React.FC<IGrid> = ({ num1,num2,num3,title1,title2,title3,subtext1,subtext2,subtext3 }) => {
    return(
      <div className="flex flex-col md:align-center md:justify-center">
      <div className="flex align-center md:align-center md:justify-center">
        <div className="p-4 bg-primary-bg h-40 md:h-60 md:w-80 w-72 text-center text-white md:text-14rem text-9xl">{num1}</div>
        <div className="p-4 bg-gray h-40md:h-60 md:w-80  w-72 flex flex-col">
          <span className="font-semibold text-xs xs:text-sm md:text-xl">{title1}</span>
          <span className="text-8px xs:text-xs md:text-lg mt-2 ">{subtext1}</span>
        </div>
      </div>
      <div className="flex md:align-center md:justify-center">
      <div className="p-4 bg-gray h-40 md:h-60 md:w-80  w-72 flex flex-col">
          <span className="font-semibold text-xs xs:text-sm md:text-xl">{title2}</span>
          <span className="text-8px xs:text-xs md:text-lg mt-2">{subtext2}</span>
        </div>
        <div className="p-4  bg-tertiary-bg bg-opacity-60 h-40 md:h-60 md:w-80  w-72  text-center text-white md:text-14rem  text-9xl">{num2}</div>
      </div>
      <div className="flex md:align-center md:justify-center">
        <div className="p-4 bg-secondary-bg bg-opacity-90  h-40 md:h-60 md:w-80  w-72  text-center text-white md:text-14rem  text-9xl">{num3}</div>
        <div className="p-4 bg-gray h-40 md:h-60 md:w-80  w-72 flex flex-col">
          <span className="font-semibold text-xs xs:text-sm md:text-xl">{title3}</span>
          <span className="text-8px xs:text-xs md:text-lg  mt-2">{subtext3}</span>
        </div>
      </div>
    </div>
    );
  };
  
  export default Grid;