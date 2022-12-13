
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { NextPageWithLayout } from './page';

import SmallBook from '../components/smallBook/SmallBook';

const Home: NextPageWithLayout = () => {
const test=()=>{
  return alert("hello world")
}
  return (
    <section >
  <SmallBook image='/invisibleman.jpeg' title='Invivisble man' author='Ralph Ellison' rating={5}/>
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
