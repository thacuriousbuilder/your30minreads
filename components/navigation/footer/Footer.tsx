export interface IFooter {
    developerName: string;
    yearOfUpdate:number |null
  }
  
  const Footer: React.FC<IFooter> = ({ developerName,yearOfUpdate }) => {
    return (
      <footer className="w-full h-14 bg-color-300 " >
       <div className="flex flex-row justify-start p-3 text-color-500 text-l ">
         <p className="mr-1">created by {developerName}</p>
         <p >@{yearOfUpdate}</p>
       </div>
      </footer>
    )
  };
  
  export default Footer;