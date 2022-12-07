import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import Expanded from './Expanded.jsx';
import { AiOutlineExpand } from 'react-icons/ai';

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
      // Delete this for testing
      // style.photos.forEach(photoSet => {
      //   images.push(photoSet.url);
      // });
      updateImageList(images);
      // Handle index across style changes
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
    <div className='h-full'>
      <div style={styling} className='h-full overflow-hidden bg-stone-400 bg-center relative ease-linear duration-300'>

        <AiOutlineExpand className='absolute top-4 right-4 z-20 hover:text-slate-500' onClick={updateStretch}/>

        <ImageCarousel imageIndex={imageIndex} updateImageIndex={updateImageIndex} imageList={imageList} updateStyling={updateStyling} />

        {imageIndex !== 0 && <BsFillArrowLeftCircleFill className='border-white border-2 text-blue-400 bg-white rounded-full top-1/2 left-24 absolute z-20 text-2xl hover:text-blue-600' onClick={previous} />}

        {imageIndex !== imageList.length - 1 && <BsFillArrowRightCircleFill className='border-white border-2 text-blue-400 top-1/2 right-4 bg-white rounded-full absolute z-10 text-2xl hover:text-blue-600' onClick={next} />}

        {style &&
          <div style={styling} className='h-full bg-contain bg-no-repeat bg-center backdrop-blur bg-white/30 ease-linear duration-300 cursor-zoom-in' onClick={e => { updateExpand(true); }}>
          </div>
        }

      </div>
      {expand && <Expanded updateExpand={updateExpand} imageIndex={imageIndex} updateImageIndex={updateImageIndex} imageList={imageList} updateStyling={updateStyling} styling={styling} />}
    </div>
  )
}

export default ImageView;