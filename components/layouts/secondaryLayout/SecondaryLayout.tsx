import Head from 'next/head';
import MidFooter from '../../midfooter/MidFooter';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';



export interface ISecondaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}
  
  const SecondaryLayout: React.FC<ISecondaryLayout> = ({ justify,children,  ...divProps }) => {
    return (
      <>
        <Head>
          <title></title>
        </Head>
        <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
           <Header /> 
          <main className="p-5">{children}</main> 
           <div className="m-auto" />
          <MidFooter/>
          <Footer developerName='TrinaryVisions LLC.' />
          
        </div>
      </>
    );
  };
  
  export default SecondaryLayout;