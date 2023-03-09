import BigBook from "../bigBook/BigBook";
import { useState } from 'react';
import BookContent from "../bookContent/BookContent";
import { GetStaticProps } from "next";
import axios from "axios";
import { CONST_CONFIG } from "../../constants/config";

// interface IEbookContainer {
//   totalPages: number;
// }

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.post(`${CONST_CONFIG.BASE_URL}graphql`, {
    query: `
    {
    nlbTests{
      data{
        id
        attributes{
          title
          cover{
            data{
              attributes{
                url
              }
            }
          }
          tableOfContents
          Pages{
            __typename
            ... on ComponentPagePage{
              title
              content
            }
          }
        }
      }
    }
  }
  
    `
  }, {
    headers: { 'content-type': 'application/json' }
  });
console.log(response.data)
  const {data} = response.data;
  console.log(data);
  return { props: data };
}

const EbookContainer: React.FC = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data)
  const mockData = [    { id: 2, 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },   
   { id: 3, text: 'Nullam pulvinar urna eget elit scelerisque, et venenatis odio commodo.' },   
    { id: 4, text: 'Suspendisse rutrum lacus at ipsum eleifend, vel suscipit ex pulvinar.' },
    { id: 5, text: 'sdsdsdsdsdslvinar.' }, ];

    const handleNextPage = () => {
      const nextPageId = currentPage + 1;
      const nextPage = mockData.find(data => data.id === nextPageId);
      if (nextPage) {
        setCurrentPage(nextPageId);
      }
    };

    const handlePrevPage = () => {
      const prevPageId = currentPage-1;
      const prevPage = mockData.find(data => data.id === prevPageId) || currentPage;
      if (prevPage) {
        setCurrentPage(prevPageId);
      }
    };

  const justify= currentPage ==1 ? "justify-center items-center": 'flex';

  const swipe = (e: React.TouchEvent<HTMLDivElement>) => {
    e.persist();
    let startingX: number;
    let dist: number;
    const minDist = 100;

    const touchMoveHandler = (event: TouchEvent) => {
      dist = event.touches[0].clientX - startingX;
    };

    const touchEndHandler = () => {
      document.removeEventListener("touchmove", touchMoveHandler);
      document.removeEventListener("touchend", touchEndHandler);

      if (dist > 0 && dist > minDist) {
        handlePrevPage();
      } else if (dist < 0 && Math.abs(dist) > minDist) {
        handleNextPage();
      }
    };

    if (e.touches.length === 1) {
      startingX = e.touches[0].clientX;

      document.addEventListener("touchmove", touchMoveHandler);
      document.addEventListener("touchend", touchEndHandler);
    }
  };
  // if (totalPages <= 0) {
  //   return <div>unknown book</div>;
  // }
  return (
    <div
      onTouchStart={swipe}
      onTouchEnd={swipe}
      className="bg-white h-4/5 mt-8 flex overflow-hidden"
    >
      <div className={justify}>
        {currentPage == 1 ? (
          <div className="flex justify-center items-center w-60 xs:w-72 ">
            <BigBook
              image="/NLB.png"
              style="bg-color-400 object-fit rounded-md m-5 xs:m-12"
            />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="h-full w-full flex justify-center">
        {mockData.map(data => {
          if (data.id === currentPage) {
            return (
              <div className="w-full transition-opacity duration-500" key={data.id}>
                <BookContent>{data.text}</BookContent>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="absolute text-xs  bottom-0 mb-4 ml-2">
        <span className="mx-auto">Page {currentPage} of {256}</span>
      </div>
      <div className="absolute bottom-0 mb-4 mr-4 right-0 text-xs">
        <span>{((currentPage / 256) * 100).toFixed(0)}% read</span>
      </div>
    </div>
  );
};

export default EbookContainer;
