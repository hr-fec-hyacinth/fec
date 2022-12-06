import React from 'react';

const {useState, useEffect} = React;

const ImageView = ({style}) => {
  const [imageIndex, updateImageIndex] = useState(-1);
  const [imageList, updateImageList] = useState([]);
  const [imageUrl, updateUrl] = useState('');

  useEffect(() => {
    if (style) {
      let images = [];
      style.photos.forEach(photoSet => {
        images.push(photoSet.url);
      })
      updateImageList('Image List', images);
      updateImageIndex(0);
      updateUrl(images[0]);
    }
  }, [style])

  const styling = {
    backgroundImage: 'url(' + imageUrl + ')',
  };

  return (
    <div className='h-full bg-stone-400 mr-1'>
      {style &&
      <div style={styling} className='h-full bg-contain bg-no-repeat bg-center'>
      </div>
    }
    </div>
  )
}

export default ImageView;