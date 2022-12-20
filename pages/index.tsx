
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
const test=()=>{
  return alert("hello world")
}
  return (
    <section >

    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
