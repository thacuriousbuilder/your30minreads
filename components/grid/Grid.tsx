export interface IGrid {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
    text6: string;
  }
  
  const Grid: React.FC<IGrid> = ({ text1,text2,text3,text4,text5,text6 }) => {
    return(
      <div className="flex flex-col">
      <div className="flex align-center">
        <div className="p-4 bg-primary-bg h-56 w-72 text-center">{text1}</div>
        <div className="p-4 bg-gray h-56 w-72">{text2}</div>
      </div>
      <div className="flex">
        <div className="p-4 bg-gray h-56 w-72">{text3}</div>
        <div className="p-4  bg-tertiary-bg bg-opacity-60 h-56 w-72">{text4}</div>
      </div>
      <div className="flex">
        <div className="p-4 bg-secondary-bg bg-opacity-90  h-56 w-72">{text5}</div>
        <div className="p-4 bg-gray h-56 w-72">{text6}</div>
      </div>
    </div>
    );
  };
  
  export default Grid;