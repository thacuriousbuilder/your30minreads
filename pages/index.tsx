
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { NextPageWithLayout } from './page';
import Button from '../components/utils/button/Button';
import BigBook from '../components/utils/bigBook/BigBook';

const Home: NextPageWithLayout = () => {
const test=()=>{
  return alert("hello world")
}
  return (
    <section >
     <BigBook image='/invisibleman.jpeg'/>
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
