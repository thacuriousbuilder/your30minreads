import ReactMarkdown from "react-markdown";


export interface IBookContent {
title:string|null|undefined;
children: string
  }

  const BookContent: React.FC<IBookContent> = ({children,title}) => {
   
    return (
      <div className="w-full" style={{  overflow: "hidden", maxHeight: "100%" }}>
        {title && <h2 className="flex justify-center text-charcoal text-sm mb-2">{title}</h2>}
        <ReactMarkdown className="text-xs xs:text-sm leading-5 ">{children}</ReactMarkdown>
      </div>
    );
  };
  
  export default BookContent;