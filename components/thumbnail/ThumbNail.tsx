import Image from 'next/image';
import useWindowDimensions from "../../hooks/useWindowsDimensions";
export interface IThumbNail {
  // image:string,
  // description: string
  }
  
  // eslint-disable-next-line no-empty-pattern
  const ThumbNail: React.FC<IThumbNail> = ({  }) => {
   const { width } = useWindowDimensions();
    return(
                     <section className='relative'>
    
                          <div className='flex flex-col  absolute top-16 md:top-24 lg:top-16 md:ml-12 lg:left-40 left-2 list-none'>
                           <li className='text-white text-sm md:text-3xl lg:text-5xl font-semibold drop-shadow'>30 minutes of your time. A lifetime of knowledge.</li>
                           <li className='text-white text-xs md:text-xl lg:text-2xl drop-shadow ml-8 md:ml-12  '>- fit reading into your day, anytime, anywhere.</li>
                          </div>
                           <Image priority className='object-cover w-full  h-48 md:h-80' src='/thumbnail.webp' alt='a shelf of books' width={width<500?200:400} height={width<500?200:400}/>

                         
                      </section>
    )
    };
  
  export default ThumbNail;


