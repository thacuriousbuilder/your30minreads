import Image from "next/image";
import Button from "../utils/button/Button";
import {RxCrossCircled} from 'react-icons/rx'
import useWindowDimensions from "../../hooks/useWindowsDimensions";

export interface IModalPopUp {
  }
  
  const ModalPopUP: React.FC<IModalPopUp> = () => {
    const test=()=>{
      return alert("hello world")
    }
    const { width } = useWindowDimensions();
    const bgI = width < 500 ? 'url("ModalPopUP.png")' : 'url("BigModalPopUp.png")'; 
    return (
      <div className="bg-cover bg-center h-screen w-full lg:bgi" style={{ backgroundImage: `${bgI}` }}>
      <div className="p-3 xs:p-1">
      <div className="flex flex-row-reverse m-2">
        <span className=""><RxCrossCircled size={25} color="white"/></span>
      </div>
        <div className="flex justify-center">
          <Image className="flex pt-4" src='/your30minreads.png' alt='The logo of the website' width={200} height={200} sizes=' (max-width: 600px) 100vw,
                  (min-width: 601px) 50vw'/>
        </div>
      <div className="flex flex-col p-2">
        <span className="text-10px xs:text-sm  m-2 font-semibold text-white ">The perfect way to transform your reading experience on the go! </span>
        <span className="text-10px xs:text-sm xs:m-3  mb-1 font-semibold text-white" >All books are written by independent authors. </span>
        <span className="text-xs xs:text-lg font-semibold mb-2" >Elevate your health in 30 minutes!</span>
        <span className="text-8px xs:text-xs text-white mb-2" >Be one of the first to join and gain first access to books, as well as a discounted subscription price when we reach 25 books in our collection.</span>
        </div>
        <form className="">
          <div className="mb-4">
            <input
              className="text-xs xs:text-sm p-3 bg-white border-2 border-primary-bg focus:outline-none focus:border-indigo-500 xs:h-12 h-10 xs:rounded-2xl rounded-xl w-2/5"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="">
            <input
              className="text-xs xs:text-sm p-3 bg-white border-2 border-primary-bg focus:outline-none focus:border-indigo-500 xs:h-12 h-10 xs:rounded-2xl  rounded-xl w-full"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center pt-2"><Button placeholder="Join waitlist" onClick={()=> test() } style="bg-primary-bg xs:w-40 w-36 xs:h-10 h-8 rounded-lg text-sm  text-white font-semibold "/></div>
          <span className="text-8px xs:text-xs text-white">emails us at recruit@your30minreads.com if would like to find out more.</span>
        </form>
      </div>

    </div>
      );
  };
  
  export default ModalPopUP;