export interface IMidFooter {}
  

  // eslint-disable-next-line no-empty-pattern
  const MidFooter: React.FC<IMidFooter> = ({ }) => {
    return(
          <div className="flex flex-row bg-color-400 h-full w-full">
       <span className="bg-gray-300 h-52 w-52 rounded-sm space-x-5 m5"></span>
       <span className="bg-gray-300 h-52 w-52  rounded-sm"></span>
       <span className="bg-gray-300 h-52 w-52  rounded-sm"></span>
          </div>

    )
  };
  
  export default MidFooter;