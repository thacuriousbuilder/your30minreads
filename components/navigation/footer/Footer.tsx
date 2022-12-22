export interface IFooter extends React.ComponentPropsWithoutRef<'footer'>  {
    developerName: string;
    yearOfUpdate:number |null
  }
  
  const Footer: React.FC<IFooter> = ({ developerName,yearOfUpdate, ...footerProps }) => {
    return (
      <footer 
      {...footerProps}
      className="w-full h-14 bg-color-300 ">
       <div className="flex flex-row justify-start p-3 text-gray-500 ">
         <p className="mr-1">created by {developerName}</p>
         <p >@{yearOfUpdate}</p>
       </div>
      </footer>
    )
  };
  
  export default Footer;