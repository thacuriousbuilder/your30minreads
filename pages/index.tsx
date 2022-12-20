
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
    <section >

      <div className='flex flex-row justify-between ml-52 mt-10 xl:ml-64'>
        <div>
          <TitleText style=' w-96 text-left break-normal' description='Invisible Man is Ralph Ellison’s only novel and is widely acknowledged as one of the great novels of African-American literature. The invisibility of Ellison’s protagonist is about the invisibility of identity—above all, what it means to be a black man—and its various masks, confronting both personal experience and the force of social illusions. The novel’s special quality is its deft combination of existential inquiry into identity as such—what it means to be socially or racially invisible—with a more sociopolitical allegory of the history of the African-American experience in America. The first-person narrator remains nameless, retrospectively recounting his shifts through the surreal reality of surroundings and people from the racist South to the no less inhospitable world of New York City.' title='Newest Book'/>
          <Button placeholder='Read now!' style='h-14 w-52 rounded-lg text-white font-bold bg-color-400 mt-2 ml-10' onClick={()=> test()}  />
        </div>
        <BigBook style='mr-52 w-80 xl:mr-80 rounded-md' image='/invisibleman.jpeg'/>
      </div>
      <div className='flex flex-row justify-between ml-52 xl:ml-64 mt-10'>
        <BigBook style='mr-52 w-80 xl:mr-80 rounded-md' image='/invisibleman.jpeg'/>
        <TitleText style=' w-96 text-left break-normal mr-40 xl:mr-64 ' description='Invisible Man is Ralph Ellison’s only novel and is widely acknowledged as one of the great novels of African-American literature. The invisibility of Ellison’s protagonist is about the invisibility of identity—above all, what it means to be a black man—and its various masks, confronting both personal experience and the force of social illusions. The novel’s special quality is its deft combination of existential inquiry into identity as such—what it means to be socially or racially invisible—with a more sociopolitical allegory of the history of the African-American experience in America. The first-person narrator remains nameless, retrospectively recounting his shifts through the surreal reality of surroundings and people from the racist South to the no less inhospitable world of New York City.' title='Coming soon!'/>
      </div>
        <div className="py-4 mt-10">
       <div className="border-b border-gray-700 w-full  text-center">
        </div>
        <div className="border-b border-gray-700 w-full text-left font-bold">
           Books
        </div>
        <div className='flex flex-row mt-5 space-x-7 ml-5'>
         {mockData.map((item)=>(
           // eslint-disable-next-line react/jsx-key
           <SmallBook author={item.author} image={item.image} title={item.title} rating={item.rating}/>
         ))}
        </div>
      </div>

    </section>
  );
};

export default Home;


Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
