import Link from 'next/link';
import{IoIosContact} from 'react-icons/io'

export interface IHeader {
    pageName: string;
  }
  
  const Header: React.FC<IHeader> = ({ pageName }) => {

    return(

      <header>
        <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline">your30minreads</a>
        </Link>
        <Link href="/">
          <a className="hover:underline">Books</a>
        </Link>
            </div>
            <div className="space-x-5 m-5">
        <Link href="/">
          <a className="hover:underline hidden sm:inline">About us</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Search</a>
        </Link>
        <Link href="/">
          <a className="hover:underline hidden sm:inline">Profile</a>
        </Link>
        
        
            </div>
      </header>
      )
    };
      
  
  export default Header;