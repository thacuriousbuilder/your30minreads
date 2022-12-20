import Link from 'next/link';
import Image from 'next/image';
import {IoIosSearch} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}
  
  const Header: React.FC<IHeader> = () => {

    return (
      <header className='w-full flex flex-row justify-between bg-white-200 h-20 shadow-lg '>
          <div className='flex flex-row space-x-5 m-7 text-lg'>
                <Link className='ml-20' href={''}>
                  <Image src='/your30minreads.png' alt='The logo of the website' width={200} height={200}/>
                </Link>
                <Link className='hover:underline' href={''}>Books</Link>
                <Link className='hover:underline'  href={''}>About us</Link>
              
              </div>
                <div className='flex flex-row  m-7 mr-10  text-lg'>
                  {/* <div className='flex list-none mr-10'>
                    <li className='mr-1 mt-0.5'>
                      <IoIosSearch size={22}/>
                    </li>
                    <li>Search</li>
                  </div> */}
                  <div className='flex list-none ' >
                    <li className='mr-1 mt-0.5'>
                      <CgProfile size={22}/>
                    </li>
                    <li>
                    <Link href={''}>Login</Link>
                    </li>
                  </div>
                </div>
          
      </header>
    );
    };
      
  
  export default Header;