import Head from 'next/head';
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
          <Footer developerName='Alhouseny Camara' yearOfUpdate={2022} />
        </div>
      </>
    );
  };
  
  export default SecondaryLayout;