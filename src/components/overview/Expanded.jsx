import React from 'react';
import {MdClose} from 'react-icons/md';
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

const {useEffect, useState} = React;

const Expanded = ({updateExpand, styling, imageIndex, imageList, updateStyling, updateImageIndex}) => {

  const next = () => {
    if (imageIndex !== imageList.length - 1) {
      updateStyling({backgroundImage: 'url(' + imageList[imageIndex + 1] + ')'});
      updateImageIndex(imageIndex + 1);
    }
  };

  const previous = () => {
    if (imageIndex !== 0) {
      updateStyling({backgroundImage: 'url(' + imageList[imageIndex - 1] + ')'});
      updateImageIndex(imageIndex - 1);
    }
  };

  return (
    <div style={styling} className='fixed top-0 left-0 z-30 w-full h-full bg-contain bg-no-repeat bg-center backdrop-blur bg-black/30'>
      <MdClose className='hover:text-gray-500 text-white right-4 top-4 absolute text-2xl' onClick={e => {updateExpand(false)}}/>
      {imageIndex !== 0 && <BsFillArrowLeftCircleFill className='hover:text-gray-500 text-2xl text-white top-1/2 left-24 absolute z-20' onClick={previous}/>}
      {imageIndex !== imageList.length - 1 && <BsFillArrowRightCircleFill className='hover:text-gray-500 text-2xl text-white top-1/2 right-24 absolute z-10' onClick={next}/>}
    </div>
  )
};

export default Expanded;