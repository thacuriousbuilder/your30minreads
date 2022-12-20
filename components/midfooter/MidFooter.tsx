import Image from "next/image";
export interface IMidFooter {}
  

  // eslint-disable-next-line no-empty-pattern
  const MidFooter: React.FC<IMidFooter> = ({ }) => {
    return(
         
            <footer className="">
              <div className="flex flex-row h-52  bg-color-400  p-5 justify-between">
               <div className="flex flex-col list-none text-white leading-7 ml-32 ">
                 <li className="hover:underline">Our Books</li>
                 <li className="hover:underline">All Books</li>
                 <li className="hover:underline">Get a free sample</li>
               </div> 
               <div className="flex flex-col list-none text-white leading-7 mr-10 ">
                 <li className="hover:underline">Our Books</li>
                 <li className="hover:underline">All Books</li>
                 <li className="hover:underline">Get a free sample</li>
               </div> 
               <div className="flex flex-col list-none text-white leading-7  mr-32">
                 <li className="hover:underline">Our Books</li>
                 <li className="hover:underline">All Books</li>
                 <li className="hover:underline">Get a free sample</li>
               </div>      
              </div>
            </footer>
          

    )
  };
  
  export default MidFooter;