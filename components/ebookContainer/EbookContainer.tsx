import { Key, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import BookContent from "../bookContent/BookContent";
import BigBook from "../bigBook/BigBook";
import ReadingHeader from "../navigation/readingHeader/ReadingHeader";
import useWindowDimensions from "../../hooks/useWindowsDimensions";
import {BiLeftArrowCircle, BiRightArrowCircle} from 'react-icons/bi'

export interface IEbookContainer {
  id: number;
  attributes: {
    title: string|null|undefined;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    tableOfContents: string;
    Pages: {
      __typename: string;
      title: string|null|undefined;
      content: string;
      pagenumber:number
    }[];
  };
}
export interface IEtest{
}
const GET_NLB_TESTS = gql`
  {
    nlbTests {
      data {
        id
        attributes {
          title
          cover {
            data {
              attributes {
                url
              }
            }
          }
          tableOfContents
          Pages {
            __typename
            ... on ComponentPagePage {
              title
              content
              pagenumber
            }
          }
        }
      }
    }
  }
`;


const EbookContainer: React.FC<IEtest>=() => {
  const { width } = useWindowDimensions();
    // console.log(width)
    const screen = width < 530
  const { loading, error, data } = useQuery<{ nlbTests: { data: IEbookContainer[],} }>(
    GET_NLB_TESTS
  );
  const [currentPage, setCurrentPage] = useState(0);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  console.log(data)
  if (loading) return (
    <div className="flex justify-center items-center h-full">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 016 12H2c0 3.042 1.135 5.824 3 7.938l3-2.647zm11.445-1.493A7.965 7.965 0 0118 12h-4c0 2.18-.882 4.154-2.32 5.607l3.766 2.642z"></path>
      </svg>
      <p>Loading...</p>
    </div>
  )
  if (error) return <p>Error: {error.message}</p>;
  

  const totalPages = data?.nlbTests.data[0]?.attributes.Pages.length ?? 0;
  // console.log(totalPages)

  const handleNextPage = () => {
    const nextPageId = currentPage + 1;
    const nextPage = data?.nlbTests.data.find(
      (test) => test.attributes.Pages.some((page) => page.pagenumber === nextPageId)
    );
    if (nextPage && nextPage.attributes.Pages.some((page) => page.pagenumber === nextPageId)) {
      setCurrentPage(nextPageId);
      // console.log(currentPage); // add this line
      if (contentContainerRef.current) {
        contentContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handlePrevPage = () => {
    const prevPageId = currentPage - 1;
    if (prevPageId > 0) {
      setCurrentPage(prevPageId);
      if (contentContainerRef.current) {
        contentContainerRef.current.scrollTop = 0;
      }
    } else {
      setCurrentPage(0);
    }
  };

  const justify = currentPage === 1 ? "justify-center items-center" : "flex";

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

  return (
    <>
    {(screen ? 
    <>
    <ReadingHeader datas={data} onNavigateToChapter={setCurrentPage} />
    <div
          onTouchStart={swipe}
          onTouchEnd={swipe}
          className="fixed w-screen bg-white p-2 h-4/5 mt-20 flex overflow-hidden overflow-x-hidden"
          style={{ overflow: "hidden" }}
        >
          <div className={justify}>
            {currentPage === 0 && (
              <div className="flex justify-center items-center w-60 xs:w-72 ">
                <BigBook
                  image={data?.nlbTests.data[0]?.attributes.cover.data.attributes.url ?? "/NLB.png"}
                  style="bg-color-400 object-fit rounded-md m-5 xs:m-12" />
              </div>
            )}
          </div>

          <div className="h-full w-full flex justify-center">
            <div
              ref={contentContainerRef}
              className="max-h-full overflow-auto"
              style={{ maxWidth: "100%" }}
            >
              {data?.nlbTests.data[0]?.attributes.Pages.map((page: { title: string | null | undefined; content: any; }, index: number) => {
                if (index + 1 === currentPage) {
                  return (
                    <div
                      key={page.title}
                      style={{ maxWidth: "100%" }}
                    >
                      <BookContent title={page.title}>{page.content}</BookContent>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="fixed text-xs bottom-0 mb-4 ml-2">
            <span className="mx-auto">Page {currentPage} of {totalPages}</span>
          </div>
          <div className="fixed bottom-0 mb-4 mr-4 right-0 text-xs">
            <span>{((currentPage / totalPages) * 100).toFixed(0)}% read</span>
          </div>
        </div>
        </>
    :
    <>
     <ReadingHeader datas={data} onNavigateToChapter={setCurrentPage} />
     <div 
      onTouchStart={swipe}
      onTouchEnd={swipe}
     className="flex justify-center relative overflow-x-hidden">
       <div
            className="fixed w-3/5 bg-white p-2 h-4/5 mt-20 flex overflow-hidden"
            style={{ overflow: "hidden"}}
          >
            <div className={justify}>
              {currentPage === 0 && (
                <div className="flex lg:w-2/3 md:w-10/12 ">
                  <BigBook
                    image={data?.nlbTests.data[0]?.attributes.cover.data.attributes.url ?? "/NLB.png"}
                    style="bg-color-400 object-fit rounded-md m-5 xs:m-12" />
                </div>
              )}
            </div>
            <div className="h-full w-full flex justify-center">
            <div
              ref={contentContainerRef}
              className="max-h-full overflow-auto"
              style={{ maxWidth: "100%" }}
            >
              {data?.nlbTests.data[0]?.attributes.Pages.map((page: { title: string | null | undefined; content: any; }, index: number) => {
                if (index + 1 === currentPage) {
                  return (
                    <div
                      key={page.title}
                      style={{ maxWidth: "100%" }}
                    >
                      <BookContent title={page.title}>{page.content}</BookContent>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
     </div>
     
     </div>
          <div className="fixed text-lg bottom-0 mb-4 ml-12">
            <span className="mx-auto">Page {currentPage} of {totalPages}</span>
          </div>
          <div className="fixed bottom-0 mb-4 mr-12 right-0 text-lg">
            <span>{((currentPage / totalPages) * 100).toFixed(0)}% read</span>
          </div>

          ({screen} ? <div></div> 
          :
         <>
          <div onClick={handlePrevPage} className="fixed top-1/2 left-8"><BiLeftArrowCircle color='black' size={80}/></div>
          <div onClick={handleNextPage} className="fixed top-1/2 right-8"><BiRightArrowCircle color="black" size={80}/></div>
          </>

    </>
    )}
    </>
  );
};

export default EbookContainer;
