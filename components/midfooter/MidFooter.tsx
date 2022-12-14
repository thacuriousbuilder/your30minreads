import Image from "next/image";
export interface IMidFooter {}
  

  // eslint-disable-next-line no-empty-pattern
  const MidFooter: React.FC<IMidFooter> = ({ }) => {
    return(
         
            <footer className="">
              <div className="flex flex-row  bg-color-400  p-10 justify-between">
                       <div className="h-96 w-72 bg-gray-200 ml-20"></div>
                       <div className="h-96 w-72 bg-gray-200"></div>
                       <div className="h-96 w-72 bg-gray-200 mr-20"></div>
              </div>
            </footer>
          

    )
  };
  
  export default MidFooter;