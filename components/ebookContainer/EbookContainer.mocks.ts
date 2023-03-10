import {IEbookContainer} from "./EbookContainer"

const base: IEbookContainer = {
  id: 1,
  attributes: {
    title: "My Ebook",
    cover: {
      data: {
        attributes: {
          url: "https://example.com/ebook-cover.jpg",
        },
      },
    },
    tableOfContents: "Chapter 1\nChapter 2\nChapter 3",
    Pages: [
      {
        __typename: "Page",
        title: "Chapter 1",
        content: "This is the content of Chapter 1.",
        pagenumber: 1,
      },
      {
        __typename: "Page",
        title: "Chapter 2",
        content: "This is the content of Chapter 2.",
        pagenumber: 2,
      },
      {
        __typename: "Page",
        title: "Chapter 3",
        content: "This is the content of Chapter 3.",
        pagenumber: 3,
      },
    ],
  },
};

export const mockEbookContainerProps = {
  base,
};