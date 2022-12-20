import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export interface ITnCarousel {
  }
  
  // eslint-disable-next-line no-empty-pattern
  const TnCarousel: React.FC<ITnCarousel> = ({  }) => {
    return(

      <Carousel className='relative h-96 bg-color-500' autoPlay={false} showThumbs={true}>
               
                    <Image src="/benefits.png" alt='test' width={300} height={300} className="carousel-image"/>
                  
                
                    <Image src="/benefits.png" alt='test' width={300} height={300} />

       
      
            </Carousel>
    )
    };
  
  export default TnCarousel;


