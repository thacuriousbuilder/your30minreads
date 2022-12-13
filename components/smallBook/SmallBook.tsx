import Image from "next/image";
import {AiFillStar} from 'react-icons/ai'
export interface ISmallBook {
    image:string,
    title:string,
    author:string,
    rating:number|null
  }
  
  const SmallBook: React.FC<ISmallBook> = ({ image,title,author,rating }) => {
    const returnRating=(rating: any)=>{
      const stars= []
      for(let i=0; i< rating; i++){
       stars.push(<span key={i}><AiFillStar size={10}/></span>)
      }
      return stars
    }
    return(
      <div>
              <Image src={image} alt="cover image for books" width={100} height={100}/>
        <div className="flex flex-col list-none justify-center">
            <li className="font-bold">{title}</li>
            <li className="text-sm">{author}</li>
            <li className="flex flex-row">{returnRating(rating)}</li>
        </div>
      </div>
    )
  };
  
  export default SmallBook;