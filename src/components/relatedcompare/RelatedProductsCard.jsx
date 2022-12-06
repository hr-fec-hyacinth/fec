import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';

const RelatedProductsCard = ({ slide, switchProduct, openModal, setOpenModal, setCurrentCompare }) => {

  //Using the first style as default
  let category = slide[1].category;
  let name = slide[1].name;
  let image = slide[0].results[0].photos[0].thumbnail_url;
  let sale_price = '$' + slide[0].results[0].sale_price;
  let original_price = '$' + slide[0].results[0].original_price;

  //Event handler to change the main detail view, selecting product number correctly but updateProduct isn't functioning
  const eventHandler = (e) => {
    e.preventDefault();
    const product_id = e.currentTarget.getAttribute('productid')
    console.log(product_id)
    switchProduct(product_id)
  }

  const displayModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal)
    setCurrentCompare(e.currentTarget.getAttribute('productid'))
  }

  return (
    <div className='px-2' >
      <MdStarBorder onClick={displayModal} className='absolute cursor-pointer z-8' productid={slide[1].id} />
      <div onClick={eventHandler} className='container border border-black' productid={slide[1].id}>
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