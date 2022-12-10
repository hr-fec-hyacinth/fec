import React from 'react';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const {useState, useEffect} = React;

const ImageCarousel = ({imageList, updateImageIndex, imageIndex, updateStyling}) => {
  const [currentImages, updateCurrentImages] = useState([]);
  const [imageObjects, updateImageObjects] = useState([]);
  const [sliderIndex, updateSliderIndex] = useState(0);
  const [maxSliderIndex, updateMaxSliderIndex] = useState(0);

  useEffect(() => {
    let images = [];
    imageList.forEach((image, i) => images.push({url: image, index: i}));
    updateImageObjects(images);
    if (imageList.length - 7 < 0) {
      updateMaxSliderIndex(0);
      updateSliderIndex(0);
      updateCurrentImages(images.slice(0, 7));
    } else {
      updateMaxSliderIndex(imageList.length - 7);
      updateCurrentImages(images.slice(sliderIndex, sliderIndex + 7));
    }

  }, [imageList])

  useEffect(() => {
    if (currentImages.length > 0) {
      let firstIndex = currentImages[0].index;
      let lastIndex = currentImages[currentImages.length - 1].index;
      if (imageIndex > lastIndex) {
        next();
    } else if (imageIndex < firstIndex) {
       previous();
    }
    }
  }, [imageIndex]);

  const next = () => {
    updateCurrentImages(imageObjects.slice(sliderIndex + 1, sliderIndex + 8));
    updateSliderIndex(sliderIndex + 1);
  };

  const previous = () => {
    updateCurrentImages(imageObjects.slice(sliderIndex - 1, sliderIndex + 6));
    updateSliderIndex(sliderIndex - 1);
  };

  return (
    <div className='hidden sm:block h-fit'>
      <div className='flex h-full flex-col left-4 absolute z-10'>
        {sliderIndex !== 0 && <IoIosArrowUp data-testid="image-up" className='my-1 z-20 self-center hover:text-slate-500' onClick={previous}/>}
        {currentImages.map((image) => {
          return (
            <img alt='view_thumbnail' key={image.index} className={image.index === imageIndex ? 'border-[2px] border-b-[4px] border-blue-400 aspect-square object-cover w-6v select-none my-1' : 'aspect-square object-cover w-12 select-none my-1 w-6v border-slate-400 border-[2px]'} src={image.url} onClick={e => {
              updateImageIndex(image.index);
              updateStyling({backgroundImage: 'url(' + image.url + ')'});
            }}/>
          )
        })}
        {sliderIndex !== maxSliderIndex && <IoIosArrowDown data-testid="image-down" className='my-1 z-20 self-center hover:text-slate-500' onClick={next}/>}
      </div>
    </div>
  )
}

export default ImageCarousel;