import Image from "next/image";
import { Url } from "url";
export interface IBigBook {
    image: string;
  }
  
  const BigBook: React.FC<IBigBook> = ({ image }) => {
    return <div className="rounded-lg">
      <Image src={image} alt="cover image for newest book" width={250} height={200}/>
      </div>;
  };
  
  export default BigBook;