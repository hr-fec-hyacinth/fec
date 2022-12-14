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
    <div className='fixed top-0 left-0 z-30 w-full h-full bg-contain backdrop-blur bg-black/30 flex justify-evenly items-center'>

      <img src={imageList[imageIndex]} data-testid="expanded-image" className='max-w-screen max-h-full object-contain bg-no-repeat bg-center select-none cursor-cell' onClick={e => {
        updateZoomed(true);
        updateZoomEvent(e);
      }}/>
        <div className='rounded-full bg-white hover:bg-[#6E6E6E] hover:text-white text-[#091E42] right-4 top-4 absolute text-7xl sm:text-2xl cursor-default z-30'><MdClose onClick={e => { updateExpand(false) }} /></div>

        {imageIndex !== 0 && <div className='z-10 left-0 sm:hidden min-h-full w-1/12 absolute flex flex-col justify-center text-2xl text-center' onClick={previous}></div>}
        {imageIndex !== 0 && <BsFillArrowLeftCircleFill data-testid="expanded-left" className='hidden rounded-full bg-white sm:block border-white border-2 text-[#1E54B1] hover:text-[#091E42] text-2xl top-1/2 left-24 absolute z-20 cursor-default' onClick={previous} />}

        {imageIndex !== imageList.length - 1 && <div className='z-10 sm:hidden right-0 min-h-full w-1/12 absolute flex flex-col justify-center text-2xl text-center' onClick={next}></div>}
        {imageIndex !== imageList.length - 1 && <BsFillArrowRightCircleFill data-testid="expanded-right" className='rounded-full bg-white hidden sm:block border-white border-2 hover:text-[#091E42] text-[#1E54B1] text-2xl top-1/2 right-24 absolute z-10 cursor-default' onClick={next} />}

        <div className='absolute bottom-4 flex'>
          {imageList.map((image, i) => {
            if (i === imageIndex) {
              return (<VscCircleLargeFilled key={i} data-testid="image-icon" className='sm:text-base text-2xl rounded-full text-[#1E54B1] border-2 border-white mx-1 cursor-default' />);
            }
            return (<VscCircleLargeFilled key={i} data-testid="image-icon" className='sm:text-base text-2xl text-white mx-1 cursor-default' onClick={e => {
              updateImageIndex(i);
            }} />);
          })}
      </div>
      {zoomed && <Zoom updateZoomed={updateZoomed} url={imageList[imageIndex]} zoomEvent={zoomEvent}/>}
    </div>
  )
};

export default Expanded;