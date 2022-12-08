import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';
import Stars from '../shared/Stars.jsx';

const RelatedProductsCard = ({ slide, switchProduct, openModal, setOpenModal, setCurrentCompare, setCurrentIndex }) => {
  //Using the first style as default
  const category = slide[1].category;
  const name = slide[1].name;
  const image = slide[0].results[0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=Product Image';
  const sale_price = '$' + slide[0].results[0].sale_price;
  const original_price = '$' + slide[0].results[0].original_price;

  const eventHandler = (e) => {
    e.preventDefault();
    switchProduct(e.currentTarget.getAttribute('productid'));
    setCurrentIndex(0);
  }

  const displayModal = (e) => {
    e.preventDefault();
    setCurrentCompare(e.currentTarget.getAttribute('productid'));
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <div className='px-2'>
      <MdStarBorder onClick={displayModal} className='relative cursor-pointer left-52 top-6 z-8 hover:text-white' productid={slide[1].id} />
        <div onClick={eventHandler} className='container h-96 w-58 border border-black cursor-pointer' productid={slide[1].id}>
          <img className='h-58 w-58' src={image} alt='Product Image' />
          <div>
            <div className='text-xs'>{category.toUpperCase()}</div>
            <div className='text-sm font-bold'>{name}</div>
            <div className='text-xs'>{original_price.slice(0, -3)}</div>
            <Stars />
          </div>
        </div>
      </div>
    </>
  )
}

export default RelatedProductsCard;

//Jon's styling to add blur to handle different sized images
// const ImageView = ({style}) => {
//   const [imageIndex, updateImageIndex] = useState(-1);
//   const [imageList, updateImageList] = useState([]);
//   const [imageUrl, updateUrl] = useState('');

//   useEffect(() => {
//     if (style) {
//       let images = [];
//       style.photos.forEach(photoSet => {
//         images.push(photoSet.url);
//       })
//       updateImageList('Image List', images);
//       updateImageIndex(0);
//       updateUrl(images[0]);
//     }
//   }, [style])

//   const styling = {
//     backgroundImage: 'url(' + imageUrl + ')',
//   };

//   return (
    // <div style={styling} className='h-full bg-stone-400 mr-1 bg-center'>
    //   {style &&
    //   <div style={styling} className='h-full bg-contain bg-no-repeat bg-center backdrop-blur bg-white/30'>
    //   </div>
    // }
    // </div>
//   )
// }