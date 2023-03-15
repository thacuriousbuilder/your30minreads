import Link from "next/link";
import Image from "next/image";
import {SlList} from 'react-icons/sl'
import { useState } from "react";
import {RxCross1} from 'react-icons/rx'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {GrSubtractCircle} from 'react-icons/gr'
import { useTextSize } from "../../utils/context/TextSizeContext";

export interface IReadingHeader {
  datas:any;
  onNavigateToChapter:any
}
const TableOfContentsModal = ({
  data,
  onClose,
  onNavigateToChapter,
}: {
  data: any;
  onClose: () => void;
  onNavigateToChapter: (pageNumber: number) => void;
}) => {
  const tableOfContents = data?.nlbTests.data[0]?.attributes.Pages.map((page: { title: any; }, index: number) => ({
    title: page.title,
    pageNumber: index + 1,
  }));

  return (
    <div className="modal-container bg-white absolute shadow-xl w-full z-50 py-4 p-4 h-screen text-lg top-14">
      <button className="close-button absolute top-4 right-4 text-xl" onClick={onClose}>
      <RxCross1 color="#5C5EEE" size={25}/>
      </button>
      <div className="modal-content mt-12">
        <h2 className="mb-5 text-charcoal">Table of Contents</h2>
        <ul>
          {tableOfContents.map((chapter: any) => (
            <div className="flex flex-row justify-between mb-5 text-charcoal opacity-70" key={chapter.pageNumber}>
              <li className="mb-5 "
                key={chapter.pageNumber}
                onClick={() => {
                  onNavigateToChapter(chapter.pageNumber);
                  onClose();
                }}
              >
                {chapter.title}
              </li>
               <li
               key={chapter.pageNumber}
               onClick={() => {
                 onNavigateToChapter(chapter.pageNumber);
                 onClose();
               }}
                         >
               {chapter.pageNumber}
                         </li>
            </div>
            
          ))}
        </ul>
      </div>
    </div>
  );
};
const TextSizeModal: React.FC<{
  onClose: () => void;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
}> = ({ onClose, increaseTextSize, decreaseTextSize }) => {
  return (
    <div
      className="text-size-modal-container flex fixed top-14 right-6 z-50 bg-white rounded-lg shadow-lg p-4"
    >
        <button className="close-button absolute top-4 right-4 text-xl" onClick={onClose}>
      <RxCross1  size={15}/>
      </button>
      <div className="flex flex-col justify-center">
        <h2 className="mb-4 text-center">Text size</h2>
        <div className="flex flex-row">
          <button
            className="bg-blue-500 text-black px-4 py-2 rounded"
            onClick={decreaseTextSize}
          >
            <span className="flex justify-center">
              <GrSubtractCircle size={20}/>
            </span>
            Decrease
          </button>
          <button
            className="bg-blue-500 text-black px-4 py-2 rounded mr-2"
            onClick={increaseTextSize}
          >
             <span className="flex justify-center">
              <AiOutlinePlusCircle size={20}/>
            </span>
            Increase
          </button>
        </div>
            </div>
      </div>
  );
};

  const ReadingHeader: React.FC<IReadingHeader> = ({datas,onNavigateToChapter}) => {
    const [showModal, setShowModal] = useState(false);
    const [isTextSizeModalOpen, setIsTextSizeModalOpen] = useState(false);
    const { textSize, setTextSize } = useTextSize();

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleTextSizeModal = () => {
    setIsTextSizeModalOpen(!isTextSizeModalOpen);
  };
      const readingHeaderbg= showModal ? "bg-backGrd" : "bg-white"
      const increaseTextSize = () => {
        const textSizeMapping = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
        const currentIndex = textSizeMapping.indexOf(textSize);
    
        if (currentIndex < textSizeMapping.length - 1) {
          setTextSize(textSizeMapping[currentIndex + 1]);
        }
      };
      const decreaseTextSize = () => {
        const textSizeMapping = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
        const currentIndex = textSizeMapping.indexOf(textSize);
    
        if (currentIndex > 0) {
          setTextSize(textSizeMapping[currentIndex - 1]);
        }
      };
    return (
      <>
    <div className={`flex flex-row fixed justify-between w-screen py-4 px-6 ${readingHeaderbg}`} >
       <li>
        <SlList onClick={toggleModal} size={25}/>
       </li>
          <li>
          <Link href={'/'}>
                  <Image className="mt-1" src='/your30minreads.png' alt='The logo of the website' width={150} height={150}/>
                </Link>
          </li>
          <li onClick={toggleTextSizeModal} className="font-semibold text-xl">Aa</li>
      </div>
      {isTextSizeModalOpen && (
        <TextSizeModal
          onClose={toggleTextSizeModal}
          increaseTextSize={increaseTextSize}
          decreaseTextSize={decreaseTextSize}
        />
      )}
       {showModal && <TableOfContentsModal data={datas} onClose={toggleModal} onNavigateToChapter={onNavigateToChapter} />}
       </>
    );
    };
  
  export default ReadingHeader;