import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}
  
  const PrimaryLayout: React.FC<IPrimaryLayout> = ({ justify,children,  ...divProps }) => {
    return (
      <>
        <Head>
          <title>your30minreads</title>
        </Head>
        <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
          <Header />
          <main className="px-5">{children}</main>
          <div className="m-auto" />
          <Footer developerName='Alhouseny Camara' yearOfUpdate={2022} />
        </div>
      </>
    );
  };
  
  export default PrimaryLayout;