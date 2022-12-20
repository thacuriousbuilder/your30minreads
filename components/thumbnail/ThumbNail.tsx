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
    
                          <div className='flex flex-col justify-between absolute   top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 list-none xl:top-40  '>
                           <li className=' text-white text-4xl font-bold drop-shadow-2xl  '>Reading 30 minutes a day can lead to  better brain connectivity</li>
                           <li className=' text-white '>Find out more</li>
                           <li className=' text-white ml-32'> <Button placeholder='Hey read me' onClick={()=>test()}  style='h-14 w-52 rounded-lg text-white font-bold bg-color-500' /></li>
                          </div>
                           <Image className='object-cover w-full  h-100 xl:h-96' src='/thumbnail.webp' alt='a shelf of books' width={1000} height={1000}/>

                         
                      </section>
    )
    };
  
  export default ThumbNail;


