import React from 'react';
import { MdClose } from 'react-icons/md';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrRadialSelected, GrRadial } from 'react-icons/gr';
import { VscCircleLargeFilled } from 'react-icons/vsc';
import Zoom from './Zoom.jsx';

const { useEffect, useState } = React;

const Expanded = ({ updateExpand, styling, imageIndex, imageList, updateStyling, updateImageIndex }) => {
  const [zoomed, updateZoomed] = useState(false);
  const [zoomEvent, updateZoomEvent] = useState({});


  useEffect(() => {
    updateStyling({ backgroundImage: 'url(' + imageList[imageIndex] + ')' });
  }, [imageIndex]);

  const next = () => {
    if (imageIndex !== imageList.length - 1) {
      updateStyling({ backgroundImage: 'url(' + imageList[imageIndex + 1] + ')' });
      updateImageIndex(imageIndex + 1);
    }
  };

  const previous = () => {
    if (imageIndex !== 0) {
      updateStyling({ backgroundImage: 'url(' + imageList[imageIndex - 1] + ')' });
      updateImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className='fixed top-0 left-0 z-30 w-full h-full bg-contain backdrop-blur bg-black/30 flex justify-evenly'>

      <img src={imageList[imageIndex]} className='w-fit bg-no-repeat bg-center max-h-screen select-none cursor-cell' onClick={e => {
        updateZoomed(true);
        updateZoomEvent(e);
      }}/>
        <MdClose className='hover:text-gray-500 text-white right-4 top-4 absolute text-2xl cursor-default' onClick={e => { updateExpand(false) }} />
        {imageIndex !== 0 && <BsFillArrowLeftCircleFill className='hover:text-gray-500 text-2xl text-white top-1/2 left-24 absolute z-20 cursor-default' onClick={previous} />}
        {imageIndex !== imageList.length - 1 && <BsFillArrowRightCircleFill className='hover:text-gray-500 text-2xl text-white top-1/2 right-24 absolute z-10 cursor-default' onClick={next} />}
        <div className='absolute bottom-4 flex'>
          {imageList.map((image, i) => {
            if (i === imageIndex) {
              return (<VscCircleLargeFilled key={i} className='rounded-full text-blue-400 border-2 border-white mx-1 cursor-default' />);
            }
            return (<VscCircleLargeFilled key={i} className='text-white mx-1 cursor-default' onClick={e => {
              updateImageIndex(i);
            }} />);
          })}
      </div>
      {zoomed && <Zoom updateZoomed={updateZoomed} url={imageList[imageIndex]} zoomEvent={zoomEvent}/>}
    </div>
  )
};

export default Expanded;