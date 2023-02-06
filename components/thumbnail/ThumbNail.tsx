import Image from 'next/image';
import Button from '../../components/utils/button/Button';
export interface IThumbNail {
  // image:string,
  // description: string
  }
  
  // eslint-disable-next-line no-empty-pattern
  const ThumbNail: React.FC<IThumbNail> = ({  }) => {
    const test=()=>{
      return alert("hello world")
    }
    return(
                     <section className='relative'>
    
                          <div className='flex flex-col justify-between absolute   top-16 ml-2 list-none w-full'>
                           <li className=' text-white text-md font-semibold drop-shadow  '>30 minutes of your time. A lifetime of knowledge.</li>
                           <li className=' text-white text-sm drop-shadow ml-8  '>- fit reading into your day, anytime, anywhere.</li>
                          </div>
                           <Image className='object-cover w-full  h-48' src='/thumbnail.webp' alt='a shelf of books' width={1000} height={1000}/>

                         
                      </section>
    )
    };
  
  export default ThumbNail;


