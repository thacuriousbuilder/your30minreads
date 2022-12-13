
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import { NextPageWithLayout } from './page';
import Button from '../components/utils/button/Button';

const Home: NextPageWithLayout = () => {
const test=()=>{
  return alert("hello world")
}
  return (
    <section >
      <Button placeholder='Read now' onClick={()=> test()}/>
    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
