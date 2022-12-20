
import BigBook from '../components/bigBook/BigBook';
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import TitleText from '../components/utils/titleText/TitleText';
import Button from '../utils/button/Button';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
const test=()=>{
  return alert("hello world")
}
  return (
    <section >

      <div className='flex flex-row justify-between ml-52 xl:ml-64'>
        <TitleText style=' w-96 text-left break-normal' description='Two brothers going on a journey to find better opportunities to help save their dying mother, Maliki goes first, sidiki goes second.' title='Newest Book'/>
        <BigBook style='mr-52 w-80 xl:mr-80 rounded-md' image='/invisibleman.jpeg'/>
      </div>
      <div className='flex flex-row justify-between ml-52 xl:ml-64 mt-10'>
        <BigBook style='mr-52 w-80 xl:mr-80 rounded-md' image='/invisibleman.jpeg'/>
        <TitleText style=' w-96 text-left break-normal mr-40 ' description='Black Geniuses That Everyone Should Know Abouts' title='Coming soon!'/>
      </div>

    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
