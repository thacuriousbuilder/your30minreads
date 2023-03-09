import Link from "next/link";
import Image from "next/image";
import {SlList} from 'react-icons/sl'

export interface IReadingHeader {}
  
  const ReadingHeader: React.FC<IReadingHeader> = () => {
    return (

    <div className="flex flex-row justify-between w-full py-4 px-6 bg-white " >
       <li>
        <SlList size={25}/>
       </li>
          <li>
          <Link href={''}>
                  <Image className="mt-1" src='/your30minreads.png' alt='The logo of the website' width={150} height={150}/>
                </Link>
          </li>
          <li className="font-semibold text-xl">Aa</li>
      </div>
    );
  };
  
  export default ReadingHeader;