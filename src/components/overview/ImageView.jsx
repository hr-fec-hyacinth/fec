import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Expanded from './Expanded.jsx';
import { AiOutlineExpand } from 'react-icons/ai';
import { VscCircleLargeFilled } from 'react-icons/vsc';

const { useState, useEffect } = React;

const ImageView = ({ style, updateStretch }) => {
  const [imageIndex, updateImageIndex] = useState(-1);
  const [imageList, updateImageList] = useState([]);
  const [styling, updateStyling] = useState({});
  const [expand, updateExpand] = useState(false);

  useEffect(() => {
    if (style) {
      let images = [];
      style.photos.forEach(photoSet => {
        images.push(photoSet.url);
      });
      updateImageList(images);
      if (imageIndex > images.length - 1) {
        updateImageIndex(images.length - 1);
        updateStyling({ backgroundImage: 'url(' + images[images.length - 1] + ')' });
      } else if (imageIndex === -1) {
        updateImageIndex(0);
        updateStyling({ backgroundImage: 'url(' + images[0] + ')' });
      } else {
        updateStyling({ backgroundImage: 'url(' + images[imageIndex] + ')' });
      }
    }
  }, [style])

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
    <div className='min-h-6/10 w-full h-full'>
      <div style={styling} className='block sm:min-h-0 min-h-halfScreen w-full sm:h-full overflow-hidden bg-stone-400 bg-center relative ease-linear duration-300'>

        <div className='rounded-full bg-white hover:bg-[#6E6E6E] hover:text-white w-6 h-6 hidden sm:block absolute top-4 right-4 z-20 text-[#091E42]'><AiOutlineExpand data-testid="outline-expand" className='m-auto mt-1' onClick={updateStretch}/></div>

        <ImageCarousel imageIndex={imageIndex} updateImageIndex={updateImageIndex} imageList={imageList} updateStyling={updateStyling} />

        {imageIndex !== 0 && <div className='z-10 sm:hidden min-h-full w-1/12 absolute flex flex-col justify-center text-2xl text-center' onClick={previous}></div>}
        {imageIndex !== 0 && <BsFillArrowLeftCircleFill data-testid="image-left" className='hidden sm:block border-white border-2 text-[#1E54B1] bg-white rounded-full top-1/2 left-4 sm:left-24 absolute z-20 text-2xl hover:text-[#091E42]' onClick={previous} />}

        {imageIndex !== imageList.length - 1 && <div className='z-10 sm:hidden right-0 min-h-full w-1/12 absolute flex flex-col justify-center text-2xl text-center' onClick={next}></div>}
        {imageIndex !== imageList.length - 1 && <BsFillArrowRightCircleFill data-testid="image-right" className='hidden sm:block border-white border-2 text-[#1E54B1] top-1/2 right-4 bg-white rounded-full absolute z-10 text-2xl hover:text-[#091E42]' onClick={next} />}

        {style &&
          <div style={styling} data-testid="image" className='min-w-full min-h-6/10 h-full bg-contain bg-no-repeat bg-center backdrop-blur bg-white/30 ease-linear duration-300 cursor-zoom-in' onClick={e => { updateExpand(true); }}>
          </div>
        }

        <div className='block sm:hidden absolute w-full bottom-4 flex justify-center'>
          {imageList.map((image, i) => {
            if (i === imageIndex) {
              return (<VscCircleLargeFilled key={i} className='rounded-full text-[#1E54B1] border-2 border-white mx-1 cursor-default' />);
            }
            return (<VscCircleLargeFilled key={i} className='text-white mx-1 cursor-default' />);
          })}
        </div>
      </div>
      {expand && <Expanded updateExpand={updateExpand} imageIndex={imageIndex} updateImageIndex={updateImageIndex} imageList={imageList} updateStyling={updateStyling} styling={styling} />}
    </div>
  )
}

export default ImageView;