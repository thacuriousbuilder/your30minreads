import Link from 'next/link';
import Image from 'next/image';


export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}
  
  const Header: React.FC<IHeader> = () => {

    return (
      <header className='self-center mt-5 mb-2'>
                <Link href={''}>
                  <Image src='/your30minreads.png' alt='The logo of the website' width={200} height={200} sizes=' (max-width: 600px) 100vw,
              (min-width: 601px) 50vw'/>
                </Link>
             
      </header>
    );
    };
      
  
  export default Header;