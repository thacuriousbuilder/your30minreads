import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import MidFooter from '../../midfooter/MidFooter';
import ThumbNail from '../../thumbnail/ThumbNail';
import HeaderBanner from '../../headerBanner/HeaderBanner';
import ModalPopup from '../../modalPopUp/ModalPopUp';
import OverlayContent from '../../overlayContent/OverlayContent';
import { useEffect, useState } from 'react';
import ThankYouModal from '../../thankyouModal/ThankYouModal';


export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}
 const PrimaryLayout: React.FC<IPrimaryLayout> = ({ justify,children,  ...divProps },) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
    //shows the modal once countdown is done.
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleClose = () => {
      setIsOpen(false);
    };
    const handleThankYouModal=()=>{
      setIsThankYouModalOpen(true)
    };
    return (
      <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>your30minreads</title>
        </Head>
        <div {...divProps} className={`min-h-screen flex flex-col bg-backGrd ${justify}`}>
        <ModalPopup isOpen={isOpen} style={''}>
            <OverlayContent onClose={handleClose} onSubmit={handleThankYouModal}/>
          </ModalPopup>
          {isThankYouModalOpen && (
               <ThankYouModal onClose={() => setIsThankYouModalOpen(false)} />
            )}
          <HeaderBanner style='bg-primary-bg xs:h-20 md:h-20 h-20 w-full'  text='Stay informed and be the first to know about new releases with our newsletter. Sign up now and get updates and exclusive access to upcoming books.'/>
          <Header />
          <ThumbNail/>
          <div className="m-auto" />  
          <main className="pb-8">{children}</main>
          <div className="m-auto" />
          <MidFooter/>
          <Footer developerName='TrinaryVisions LLC.' /> 
        </div>
      </>
    );
  };
  
  export default PrimaryLayout;