import React from "react";
import useWindowDimensions from "../hooks/useWindowsDimensions";
import ReadingHeader from "../components/navigation/readingHeader/ReadingHeader";
import EbookContainer from "../components/ebookContainer/EbookContainer";

const Reading = () =>{
    const { width } = useWindowDimensions();
    // console.log(width)
    const screen = width < 530
    return(
      
        (screen ? 
        <div className="bg-backGrd flex flex-col list-none h-screen">
            <ReadingHeader/>
            <EbookContainer/>

        </div> 
        :  
        <div>Im big screen</div>)
             
    )

}
export default Reading