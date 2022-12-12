
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { NextPageWithLayout } from './page';
import TitleText from '../utils/titleText/TitleText';

const Home: NextPageWithLayout = () => {

  return (
    <section >
      
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
