import Image from "next/image";
import Button from "../utils/button/Button";
import {RxCrossCircled} from 'react-icons/rx'
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import { useState } from "react";
import axios from "axios";
import { CONST_CONFIG } from "../../constants/config";

export interface IOverlayContent {
  onClose:any
  }
  const OverlayContent: React.FC<IOverlayContent> = ({onClose}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const handleName = (event:any) =>{
      setName(event.target.value)
      // console.log(name)
    }
    const handleEmail = (event:any) =>{
      setEmail(event.target.value)
      // console.log(email)
    }
    const handleSubmit = (event:any) => {
      event.preventDefault(); // prevent the default form submit action
    
      axios.post(`${CONST_CONFIG.BASE_URL}api/tests`, {
        data:{
          Name: name,
          Email: email
        }
        })
        .then(response => {
          console.log('Form data successfully submitted to Strapi:', response.data);
          onClose(); // close the modal after successful submission
        })
        .catch(error => {
          console.error('Error submitting form data to Strapi:', error);
          // handle error state
        });
    };
    const { width } = useWindowDimensions();

    //checks the size of the screen and shows the correct backgroudImage
    const bgI = width < 500 ? `url(${CONST_CONFIG.BASE_MEDIA_URL}Modal_Pop_UP_8252eca87b.png)` : `url(${CONST_CONFIG.BASE_MEDIA_URL}Big_Modal_Pop_Up_b62cf6e6b6.png)`; 
    return (
      <div className="bg-cover bg-center bg-no-repeat h-screen w-screen" style={{ backgroundImage: `${bgI}` }}>
      <div className="p-3 xs:p-1">
      <div className="flex flex-row-reverse px-5">
        <span className="bg-opacity-60" onClick={onClose}><RxCrossCircled size={width>600?40:30} color='orange'/></span>
      </div>
        <div className="flex justify-center sm:px-16">
          <Image className="flex pt-4" src='/your30minreads.png' alt='The logo of the website' width={width<500?200:400} height={width<500?200:400} sizes=' (max-width: 600px) 100vw,
                  (min-width: 601px) 50vw'/>
        </div>
      <div className="flex flex-col text-center justify-center p-2">
        <span className="text-10px xs:text-sm md:text-2xl m-2 font-semibold text-white ">The perfect way to transform your reading experience on the go! </span>
        <span className="text-xs xs:text-lg md:text-xl font-semibold mb-2" >Elevate your health in 30 minutes!</span>
        </div>
        <div className="flex flex-col text-center justify-center"><span className="text-8px xs:text-xs md:text-lg lg:text-sm text-white  mb-2  " >Join us as an early adopter to get access to free books and our upcoming launch updates.</span></div>
        <form className="">
          <div className="flex align-center justify-center mb-4 ">
            <input
            onChange={handleName}
              className="text-xs xs:text-sm md:text-lg p-3 bg-white border-2 md:border-4 border-primary-bg focus:outline-none focus:border-indigo-500 xs:h-12 md:h-16 h-10 rounded-xl xs:rounded-2xl md:rounded-3xl w-full md:w-4/5 lg:w-2/4"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="flex align-center justify-center ">
            <input
            onChange={handleEmail}
              className="text-xs xs:text-sm md:text-lg p-3 bg-white border-2 md:border-4 border-primary-bg focus:outline-none focus:border-indigo-500 xs:h-12 md:h-16 h-10 rounded-xl xs:rounded-2xl md:rounded-3xl w-full md:w-4/5 lg:w-2/4"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center pt-2">
            <Button placeholder="Join waitlist" onClick={()=> handleSubmit(event) } style="bg-primary-bg xs:w-40 w-36 md:w-50 h-8 xs:h-10 md:h-14 rounded-lg text-sm md:text-lg text-white font-semibold "/>
            </div>
          <div className="flex justify-center">

          <span className="text-8px xs:text-xs md:text-sm lg:text-sm p-2 md:mr-8 text-white ">To submit your book, email us at books@your30minreads.com</span>
            </div>
        </form>
      </div>

    </div>
      );
  };
  
  export default OverlayContent;