

export interface IBookContent extends React.ComponentPropsWithoutRef<'div'>  {
  // pageNumber: number;
  // content: string;
  }

  
  const BookContent: React.FC<IBookContent> = ({children}) => {
    return (
      <div className="mt-1 m-3">
        <h1 className="flex justify-center font-semibold text-lg xs:text-2xl p-2">Preface</h1>
          <p  className="text-sm xs:text-lg">
               {children}
          </p>
      </div>
    );
  };
  
  export default BookContent;