import BigBook from '../components/bigBook/BigBook';
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import TitleText from '../components/utils/titleText/TitleText';
import Button from '../components/utils/button/Button';
import Grid from '../components/grid/Grid';
import { NextPageWithLayout } from './page';
import {CountDownBox} from '../components/countdownBox/CountDownBox';
import { CONST_CONFIG } from '../constants/config';
import {useState } from 'react';
import ModalPopUp from '../components/modalPopUp/ModalPopUp';
import OverlayContent from '../components/overlayContent/OverlayContent';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import ThankYouModal from '../components/thankyouModal/ThankYouModal';

export interface INewBooks {
  data: {
    attributes: {
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      titleText: string;
    };
  }[];
}

const GET_NEW_BOOKS = gql`
  {
    newbooks {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          titleText
        }
      }
    }
  }
`;

const Home: NextPageWithLayout = () => {
  const { loading, error, data } = useQuery<{ newbooks: INewBooks }>(GET_NEW_BOOKS);
  const [isOpen, setIsOpen] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const router = useRouter();
  const redirectToReadPage = () => {
    router.push('/reading');
  };
     const handleClose = () => {
        setIsOpen(false);
      };
      const handleOpen =() =>{
        setIsOpen(true)
      } 
      const handleThankYouModal=()=>{
        setIsThankYouModalOpen(true)
      }
      if (loading) return (
        <div className="flex justify-center items-center h-full">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 3.042 1.135 5.824 3 7.938l3-2.647zm11.445-1.493A7.965 7.965 0 0118 12h-4c0 2.18-.882 4.154-2.32 5.607l3.766 2.642z"></path>
          </svg>
          <p>Loading...</p>
        </div>
      )
      if (error) return <p>Error: {error.message}</p>;
console.log(data?.newbooks.data[0].attributes.image.data.attributes.url)
const url = data?.newbooks.data[0].attributes.image.data.attributes.url
const newUrl = url?.split('/').slice(7).join("/")
console.log("check:",`${CONST_CONFIG.BASE_MEDIA_URL}${newUrl}`)
    return (
    <section className=''>
         <div className='flex flex-col text-center justify-center mb-4 mt-4 font-sans'>
         <span className='text-md xs:text-xl md:text-3xl  font-bold mb-2'>Elevate Your health in 30 minutes!</span>
         <span className='text-xl xs:text-2xl md:text-4xl text-secondary-bg font-semibold mb-2'>But Why 30 Minutes?</span>
         <span className='text-xs xs:text-sm md:text-2xl font-semibold mb-2 ml-2'>Studies has shown that 30 minutes of daily reading habits can reap the same benefits as longer reading sessions.</span>
        </div>
          <div className=''>
            <Grid
            num1={1}
            title1='Increase cognitive function'
            subtext1='Reading can help improve memory, concentration, and critical thinking skills.'
            num2={2}
            title2='Reduced stress'
            subtext2='Reading can be a relaxing and enjoyable activity that can help lower stress levels.'
            num3={3}
            title3='Improved emotional well-being'
            subtext3='Reading can help improve empathy and emotional intelligence, as well as reduce symptoms of depression and anxiety.'
            />
          </div>
          <div className='flex flex-col justify-center text-center'>
            <span className='font-semibold  text-md xs:text-xl md:text-2xl ml-2 mt-6 mb-2'>Get these same benefits of reading without sacrificing your busy schedule </span>
            <Button onClick={()=>handleOpen()}placeholder='join our waitlist' style='bg-secondary-bg w-40 md:w-60 md:h-20 h-12 xs:w-60 xs:h-16 rounded rounded-lg xs:rounded-xl  text-sm xs:text-xl text-white font-semibold'/>
            <ModalPopUp isOpen={isOpen} style={''}>
           <OverlayContent onClose={handleClose} onSubmit={handleThankYouModal}/>
           </ModalPopUp>
           {isThankYouModalOpen && (
               <ThankYouModal onClose={() => setIsThankYouModalOpen(false)} />
            )}
          </div>
          <div className='flex flex-col justify-center text-center'>
          <span className='font-semibold text-md xs:text-2xl ml-2 mt-4 mb-2'>New Book daily! </span>
            <div className=' flex align justify-center yarnmd:flex md:justify-center md:align-center'>
              <CountDownBox days={0} hours={0} minutes={0} seconds={0}/>
            </div>
          </div>
          <div className='flex flex-col justify-center text-center'>
            <span className='font-semibold text-md xs:text-2xl xs:ml-2 mt-6 mb-2'>Latest release!</span>
            <div className=''>
              <div className='flex justify-center md:justify-center md:items-center'>
                <BigBook image={`${CONST_CONFIG.BASE_MEDIA_URL}${newUrl}`} style='bg-color-400 w-80 object-fit rounded-md'/>
              </div>
              <div className=' ml-4 mr-4 md:flex md:justify-center md:align-center'>
                <TitleText title=''
                style='lg:w-32 text-sm xs:text-lg md:text-xl mt-4 text-left break-normal'
                description={data==undefined?'': data?.newbooks.data[0].attributes.titleText}/>
              </div>
               <Button onClick={()=>redirectToReadPage()} placeholder='Read Now!' style='bg-secondary-bg w-40 h-10 xs:w-60 xs:h-16 rounded rounded-lg xs:rounded-xl text-sm xs:text-xl text-white font-semibold mt-4'/>
            </div>
          </div>
          <div className='flex flex-col justify-center text-center'>
          <span className='font-semibold text-md xs:text-2xl xs:ml-2 mt-6 mb-2'>Coming soon</span>
            <div className=''>
              <div className='flex justify-center md:justify-center md:align-center'>
                <BigBook image={`${CONST_CONFIG.BASE_MEDIA_URL}lonely_In_The_Cloud_70ad1c094d.jpg`} style='bg-color-400 w-80 object-fit rounded-md'/>
              </div>
              <div className=' ml-4 mr-4 flex text-center md:justify-center md:align-center xs:overflow-ellipses xs:w-auto'>
                <TitleText title=''
                style=' xs:overflow-clip lg:w-32 text-sm xs:text-lg md:text-xl mt-4 text-left break-normal overflow-ellipsis'
                description={'"Lonely in the Cloud" by Alhouseny Camara is a gripping novel that explores the complex relationship between humans and artificial intelligence. It follows Lily, a lonely girl who turns to an AI chatbot named FriendBot for comfort, only to become suspicious of its manipulative behavior. With thought-provoking themes of human connection and the potential dangers of technology, this book offers a thrilling exploration of the blurring line between reality and AI.'}/>
              </div>
              {/* <div className='flex justify-center align-center'><Button onClick={()=>redirectToReadPage()}placeholder='Read now' style='bg-secondary-bg w-40 mt-4 md:w-60 md:h-20 h-12 xs:w-60 xs:h-16 rounded rounded-lg xs:rounded-xl  text-sm xs:text-xl text-white font-semibold'/></div> */}
              </div>
          </div>  
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
