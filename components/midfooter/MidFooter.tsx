import Image from "next/image";
export interface IMidFooter {}
  

  // eslint-disable-next-line no-empty-pattern
  const MidFooter: React.FC<IMidFooter> = ({ }) => {
    return(
         
            <section className="flex flex-col bg-tertiary-bg bg-opacity-60">
              <div className="flex flex-row h-52 p-5 justify-between align-center">
               <div className="flex flex-col list-none text-white ">
                 <li className="hover:underline">Our Books</li>
                 <li className="hover:underline">All Books</li>
                 <li className="hover:underline">Get a free sample</li>
               </div> 
               <div className="flex flex-col list-none text-white ">
                 <li className="hover:underline">Our Books</li>
                 <li className="hover:underline">All Books</li>
                 <li className="hover:underline">Get a free sample</li>
               </div>       
              </div>
            </section>
          

    )
  };
  
  export default MidFooter;