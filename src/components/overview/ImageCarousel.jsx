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
    updateCurrentImages(images.slice(sliderIndex, sliderIndex + 7));
    if (imageList.length - 7 < 0) {
      updateMaxSliderIndex(0);
    } else {
      updateMaxSliderIndex(imageList.length - 7);
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
    <div className='hidden sm:block'>
      {sliderIndex !== maxSliderIndex &&<IoIosArrowDown className='left-8 absolute z-20 bottom-1' onClick={next}/>}
      {sliderIndex !== 0 && <IoIosArrowUp className='left-8 absolute z-20' onClick={previous}/>}
      <div className='flex w-2/12 h-full flex-col left-4 absolute z-10'>
        {currentImages.map((image) => {
          return (
            <img alt='view_thumbnail' key={image.index} className={image.index === imageIndex ? 'border-b-[4px] border-blue-400 aspect-square object-cover w-12 select-none mt-3' : 'aspect-square object-cover w-12 select-none mt-4'} src={image.url} onClick={e => {
              updateImageIndex(image.index);
              updateStyling({backgroundImage: 'url(' + image.url + ')'});
            }}/>
          )
        })}
      </div>
    </div>
  )
}

export default ImageCarousel;