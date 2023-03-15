import { Key, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
// import { IEbookContainer } from "./types";
import BookContent from "../bookContent/BookContent";
import BigBook from "../bigBook/BigBook";
import ReadingHeader from "../navigation/readingHeader/ReadingHeader";

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
  const { loading, error, data } = useQuery<{ nlbTests: { data: IEbookContainer[],} }>(
    GET_NLB_TESTS
  );
  const [currentPage, setCurrentPage] = useState(0);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  console.log(data)
  if (loading) return <p>Loading...</p>;
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
    <ReadingHeader datas={data} onNavigateToChapter={setCurrentPage}/>
    <div
      onTouchStart={swipe}
      onTouchEnd={swipe}
      className="fixed  bg-white p-2 h-4/5 mt-20 flex overflow-hidden"
      style={{ overflow: "hidden" }}
    >
      <div className={justify}>
        {currentPage === 0 && (
          <div className="flex justify-center items-center w-60 xs:w-72 ">
            <BigBook
              image={data?.nlbTests.data[0]?.attributes.cover.data.attributes.url ?? "/NLB.png"}
              style="bg-color-400 object-fit rounded-md m-5 xs:m-12"
            />
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
  );
};

export default EbookContainer;
