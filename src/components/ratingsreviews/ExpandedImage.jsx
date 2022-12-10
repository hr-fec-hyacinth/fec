import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrRadialSelected, GrRadial } from 'react-icons/gr';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const ExpandedImage = ({ setExpand, imageIndex, setImageIndex, imageList }) => {

  const next = () => {
    if (imageIndex !== imageList.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const previous = () => {
    if (imageIndex !== 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className='fixed top-0 left-0 z-30 w-full h-full bg-contain backdrop-blur bg-black/30 flex justify-evenly items-center'>
      <img src={imageList[imageIndex]['url']} className='max-w-screen max-h-full object-contain bg-no-repeat bg-center select-none cursor-cell'/>
      <MdClose className='hover:text-gray-500 text-white right-4 top-4 absolute text-7xl sm:text-2xl cursor-default z-30' onClick={e => { setExpand(false) }} />

      {imageIndex !== 0 && <div className='z-10 left-0 sm:hidden min-h-full w-1/12 absolute flex flex-col justify-center text-2xl text-center' onClick={previous}></div>}
      {imageIndex !== 0 && <BsFillArrowLeftCircleFill data-testid="expanded-left" className='hidden sm:block hover:text-gray-500 text-2xl text-white top-1/2 left-24 absolute z-20 cursor-default' onClick={previous} />}

      {imageIndex !== imageList.length - 1 && <div className='z-10 sm:hidden right-0 min-h-full w-1/12 absolute flex flex-col justify-center text-2xl text-center' onClick={next}></div>}
      {imageIndex !== imageList.length - 1 && <BsFillArrowRightCircleFill data-testid="expanded-right" className='hidden sm:block hover:text-gray-500 text-2xl text-white top-1/2 right-24 absolute z-10 cursor-default' onClick={next} />}

      <div className='absolute bottom-4 flex'>
        {imageList.map((image, i) => {
          if (i === imageIndex) {
            return (<VscCircleLargeFilled key={i} data-testid="image-icon" className='sm:text-base text-2xl rounded-full text-blue-400 border-2 border-white mx-1 cursor-default' />);
          }
          return (<VscCircleLargeFilled key={i} data-testid="image-icon" className='sm:text-base text-2xl text-white mx-1 cursor-default' onClick={e => {
            setImageIndex(i);
          }} />);
        })}
      </div>
    </div>
  )
};

export default ExpandedImage;