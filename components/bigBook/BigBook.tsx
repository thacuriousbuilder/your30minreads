import Image from "next/image";
export interface IBigBook {
    image: string;
    style: string;
  }
  
  const BigBook: React.FC<IBigBook> = ({ image,style }) => {
    return <div className="rounded-lg">
      <Image priority className={style} src={image} alt="cover image for newest book" width={1000} height={1000}/>
      </div>;
  };
  
  export default BigBook;