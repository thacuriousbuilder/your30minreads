export interface IFooter extends React.ComponentPropsWithoutRef<'footer'>  {
    developerName: string;
  }

  // checks the year
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  
  const Footer: React.FC<IFooter> = ({ developerName, ...footerProps }) => {
    return (
      <footer 
      {...footerProps}
      className="w-full h-16 bg-quartiary-bg text-center">
         <div className="text-white text-sm ml-2 mt-6">@ {getYear()} - Made By {developerName}</div>
      </footer>
    )
  };
  
  export default Footer;