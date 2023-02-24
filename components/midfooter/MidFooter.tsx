import Image from "next/image";
export interface IMidFooter {}
  

  // eslint-disable-next-line no-empty-pattern
  const MidFooter: React.FC<IMidFooter> = ({ }) => {
    return(
         
            <section className="flex flex-col bg-tertiary-bg bg-opacity-60">
               <div className="flex flex-col md:text-xl justify-end pt-5 pl-5  text-white ">
                 <p className="hover:underline">Follow Us</p>
                 <div className="flex flex-row">
                   <p>
                     <Image className="mr-2" src='/insta.png' alt='The logo of the website' width={20} height={20}/>
                   </p>
                   <p>
                     <Image src='/tiktok.png' alt='The logo of the website' width={20} height={20}/>
                   </p>
                 </div>
               </div>     
              <div className="flex flex-row  h-28 p-5">
               <div className="flex  mx-auto justify-center items-center">
                 <Image className=""  src='/your30minreads.png' alt='The logo of the website' width={200} height={200}/>
               </div> 
              </div>
            </section>
          

    )
  };
  
  export default MidFooter;