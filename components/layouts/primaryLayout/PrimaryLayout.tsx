import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';
import MidFooter from '../../midfooter/MidFooter';
import TnCarousel from '../../thumbnailCarousel/TnCarousel';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}
  
  const PrimaryLayout: React.FC<IPrimaryLayout> = ({ justify,children,  ...divProps }) => {
    return (
      <>
        <Head>
          <title></title>
        </Head>
        <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
          <Header />
          <TnCarousel/>
          <div className="m-auto" />
          <main className="p-5">{children}</main>
          <div className="m-auto" />

          <MidFooter/>
          <Footer developerName='Alhouseny Camara' yearOfUpdate={2022} />
        </div>
      </>
    );
  };
  
  export default PrimaryLayout;