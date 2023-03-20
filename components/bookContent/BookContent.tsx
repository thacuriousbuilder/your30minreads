import ReactMarkdown from "react-markdown";
import { useTextSize } from "../utils/context/TextSizeContext";



export interface IBookContent {
title:string|null|undefined;
children: string
  }

  const BookContent: React.FC<IBookContent> = ({children,title}) => {
    const { textSize } = useTextSize();
    return (
      <div className="w-full m-2 p-3" style={{  overflow: "hidden", maxHeight: "100%" }}>
        {title && <h2 className="flex justify-center text-charcoal text-sm mb-2">{title}</h2>}
        <ReactMarkdown className={`${textSize}  leading-7`}>{children}</ReactMarkdown>
      </div>
    );
  };
  
  export default BookContent;