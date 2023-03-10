

export interface IBookContent {
title:string|null|undefined;
children: React.ReactNode
  }

  const BookContent: React.FC<IBookContent> = ({children,title}) => {
    let content = '';
    if (Array.isArray(children)) {
      content = children.filter((s) => s !== undefined && typeof s === 'string').join('');
    } else if (typeof children === 'string') {
      content = children;
    }
    return (
      <div className="p-4" style={{  overflow: "hidden", maxHeight: "100%" }}>
        {title && <h2 className="flex justify-center text-xl font-semibold mb-2">{title}</h2>}
        <div className="text-xs xs:text-lg leading-5">{content}</div>
      </div>
    );
  };
  
  export default BookContent;