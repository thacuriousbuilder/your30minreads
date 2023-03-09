import BigBook from '../components/bigBook/BigBook';
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import TitleText from '../components/utils/titleText/TitleText';
import Button from '../components/utils/button/Button';
import Grid from '../components/grid/Grid';
import { NextPageWithLayout } from './page';
import {CountDownBox} from '../components/countdownBox/CountDownBox';
import { CONST_CONFIG } from '../constants/config';
import { GetStaticProps } from 'next';
import axios from 'axios';
import {useState } from 'react';
import ModalPopup from '../components/modalPopUp/ModalPopUp';
import OverlayContent from '../components/overlayContent/OverlayContent';



export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.post(`${CONST_CONFIG.BASE_URL}graphql`, {
    query: `
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
    `
  }, {
    headers: { 'content-type': 'application/json' }
  });

  const {data} = response.data;
  console.log(data);
  return { props: data };
}

const Home: NextPageWithLayout = (data) => {
  const [isOpen, setIsOpen] = useState(false);
     const handleClose = () => {
        setIsOpen(false);
      };
      const handleOpen =() =>{
        setIsOpen(true)
      } 
console.log(data)
// console.log(data.newbooks.data[0].attributes.titleText)
// const url = newbooks.data[0].attributes.image.data.attributes.url
// const newUrl = url.split('/').slice(7).join("/")
// console.log("check:",`${CONST_CONFIG.BASE_MEDIA_URL}${newUrl}`)
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
            <ModalPopup isOpen={isOpen} style={''}>
           <OverlayContent onClose={handleClose}/>
           </ModalPopup>
          </div>
          <div className='flex flex-col justify-center text-center'>
          <span className='font-semibold text-md xs:text-2xl ml-2 mt-4 mb-2'>New Books Weekly! </span>
            <div className=' flex align justify-center yarnmd:flex md:justify-center md:align-center'>
              <CountDownBox days={0} hours={0} minutes={0} seconds={0}/>
            </div>
          </div>
          {/* <div className='flex flex-col justify-center text-center'>
            <span className='font-semibold text-md xs:text-2xl xs:ml-2 mt-6 mb-2'>Check out this book in the meantime!</span>
            <div className='ml-4 mr-4 xs:ml-9'>
              <div className='flex md:justify-center md:align-center'>
                <BigBook image='/invisibleman.jpeg' style='bg-color-400 w-80 object-fit rounded-md'/>
              </div>
              <div className='md:flex md:justify-center md:align-center'>
                <TitleText title=''
                style='lg:w-32 text-sm xs:text-lg md:text-xl mt-4 text-left break-normal'
                description='"Invisible Man" by Ralph Ellison is a novel exploring identity, race, and invisibility through the story of a young black man in early 20th-century America. The protagonist struggles with society attempts to define and control him based on his race and navigates a world filled with racism and prejudice. A classic of African American literature, the novel explores the theme of invisibility and the search for individuality.'/>
              </div>
               <Button onClick={()=>test()} placeholder='Read Now!' style='bg-primary-bg w-40 h-10 xs:w-48 xs:h-16 rounded rounded-lg xs:rounded-xl text-sm xs:text-xl text-white font-semibold mt-4'/>
            </div>
          </div> */}
          <div className='flex flex-col justify-center text-center'>
          <span className='font-semibold text-md xs:text-2xl xs:ml-2 mt-6 mb-2'>Coming soon</span>
            <div className='ml-4 mr-4 xs:ml-9'>
              <div className='flex md:justify-center md:align-center'>
                {/* <BigBook image={`${CONST_CONFIG.BASE_MEDIA_URL}${newUrl}`} style='6'/> */}
              </div>
              <div className='flex md:justify-center md:align-center xs:overflow-ellipses xs:w-auto'>
                <TitleText title=''
                style=' xs:overflow-clip lg:w-32 text-sm xs:text-lg md:text-xl mt-4 text-left break-normal'
                description={'Alhouseny Camara novella, "No One Left Behind" Volume I, is a powerful tale that draws inspiration from the inhumane treatment of African immigrants attempting to cross the Spanish border of Melilla. "No One Left Behind" Volume I is a poignant and gripping narrative that sheds light on the harsh reality many African immigrants face in their pursuit of a better life.'}/>
              </div>
              </div>
          </div>  
          
          
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
