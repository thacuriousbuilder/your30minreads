import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import MidFooter from '../../midfooter/MidFooter';
import ThumbNail from '../../thumbnail/ThumbNail';
import HeaderBanner from '../../headerBanner/HeaderBanner';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}
  
  const PrimaryLayout: React.FC<IPrimaryLayout> = ({ justify,children,  ...divProps }) => {
    return (
      <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>your30minreads</title>
        </Head>
        <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
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