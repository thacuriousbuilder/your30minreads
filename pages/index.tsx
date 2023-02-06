
import BigBook from '../components/bigBook/BigBook';
import PrimaryLayout from '../components/layouts/primaryLayout/PrimaryLayout';
import TitleText from '../components/utils/titleText/TitleText';
import Button from '../components/utils/button/Button';

import { NextPageWithLayout } from './page';
import SmallBook from '../components/smallBook/SmallBook';
import { isTemplateExpression } from 'typescript';

const Home: NextPageWithLayout = () => {
const test=()=>{
  return alert("hello world")
}
const mockData =[
  {
    author:'Ralph Ellison',
    image:'/invisibleman.jpeg',
    title:'Invisible Man',
    rating:5

  },
  {
    author:'Ralph Ellison',
    image:'/invisibleman.jpeg',
    title:'Invisible Man',
    rating:4

  },
  {
    author:'Ralph Ellison',
    image:'/invisibleman.jpeg',
    title:'Invisible Man',
    rating:3

  }
 
]
  

  return (
    <section>

   

    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
