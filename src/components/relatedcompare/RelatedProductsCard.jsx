import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';

const RelatedProductsCard = ({ slide, switchProduct, openModal, setOpenModal, setCurrentCompare, setCurrentIndex }) => {

  //Using the first style as default
  let category = slide[1].category;
  let name = slide[1].name;
  let image = slide[0].results[0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=Product Image';
  let sale_price = '$' + slide[0].results[0].sale_price;
  let original_price = '$' + slide[0].results[0].original_price;

  const eventHandler = (e) => {
    e.preventDefault();
    switchProduct(e.currentTarget.getAttribute('productid'));
    setCurrentIndex(0);
  }

  const displayModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal)
    setCurrentCompare(e.currentTarget.getAttribute('productid'))
    document.body.style.overflow = "hidden"
  }

  return (
    <div className='px-2' >
      <MdStarBorder onClick={displayModal} className='absolute cursor-pointer z-8' productid={slide[1].id} />
      <div onClick={eventHandler} className='container border border-black cursor-pointer' productid={slide[1].id}>
        <img className='max-h-30' src={image} alt='Product Image' />
        <div>
          {category} <br/>
          {name} <br/>
          {original_price} <br/>
          Star Rating <br/>
        </div>
      </div>
    </div>
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