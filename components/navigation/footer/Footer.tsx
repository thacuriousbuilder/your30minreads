export interface IFooter {
    developerName: string;
  }
  
  const Footer: React.FC<IFooter> = ({ developerName }) => {
    return (
      <footer className="w-full h-14 bg-color-300 " >
       <div className="flex flex-row justify-start p-3 text-color-500 ">
         <p className="mr-1">created by {developerName}</p>
         <p >@2022</p>
       </div>
      </footer>
    )
  };
  
  export default Footer;