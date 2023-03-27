import React from "react";
import EbookContainer from "../components/ebookContainer/EbookContainer";

const Reading = () =>{
    return(
        <div className="bg-backGrd flex flex-col list-none h-screen">
            {/* <ReadingHeader/> */}
            <EbookContainer/>
        </div> 
    );

}
export default Reading