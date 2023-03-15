

export type CMSPageContent = {
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    image_with_text: ImageWithTextType[];
    image_primary: string;
    image_secondary: string;
    image_tertiary: string;
  }


export type ImageWithTextType = {
    id: number;
    title: string;
    description: string;
    src: string;
    imgHeight: number;
    imgWidth: number;
  }
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