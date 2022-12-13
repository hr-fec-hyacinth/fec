import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdStarBorder } from 'react-icons/md';
import Stars from '../shared/Stars.jsx';
import averageRating from '../../helper/averageRating.js';
import RelatedProducts from './RelatedProducts.jsx';

const RelatedProductsCard = ({ slide, switchProduct, index, openModal, setOpenModal, setCurrentCompare, setCurrentIndex, style, product }) => {
  const category = slide[1].category;
  const name = slide[1].name;
  const image = slide[0].results[0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=Product Image';
  const original_price = '$' + slide[0].results[0].original_price;
  const ratings = slide[2].ratings;
  let sale_price;

  if (product.id === slide[1].id) {
    sale_price = style.sale_price;
  } else {
    sale_price = slide[0].results[0].sale_price;
  }

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
      {index !== 3 && <MdStarBorder data-testid='modal-star' onClick={displayModal} className='relative cursor-pointer left-52 top-6 z-10 hover:text-white' productid={slide[1].id} />}
      {index === 3 && <MdStarBorder onClick={displayModal} className='relative -z-20 left-52 top-6 text-transparent' />}
      {index === 3 && <div className='absolute bg-gradient-to-l from-white dark:from-[#091E42] h-84 w-58 z-10'></div>}
      <div onClick={eventHandler} className='absolute h-84 w-58 border border-black cursor-pointer dark:border-white' productid={slide[1].id}>
          <div style={{backgroundImage: 'url(' + image + ')'}} className='bg-center' >
            <img className='object-contain h-58 w-58 backdrop-blur' src={image} alt='Product Image'/>
          </div>
      </div>
        <div onClick={eventHandler} className='container h-84 w-58 border border-black cursor-pointer dark:border-white' productid={slide[1].id}>
          <div style={{backgroundImage: 'url(' + image + ')'}} className='bg-center' >
            <img className='object-contain h-58 w-58 bg-white/[.5]' src={image} alt='Product Image'/>
          </div>
          <div className='p-1.5 bg-white/30'>
            <div className='text-xs'>{category.toUpperCase()}</div>
            <div className='pt-1 text-sm font-bold'>{name}</div>
            {sale_price && <><span className='text-red-500 py-2 text-xs'>{'$' + sale_price.slice(0, -3)}</span> <span className='line-through py-2 pl-4 text-xs'>{original_price.slice(0, -3)}</span></>}
            {(!sale_price || sale_price === '0') && <div className='py-2 text-xs'>{original_price.slice(0, -3)}</div>}
            <div className='pt-2.5'> <Stars ratings={averageRating(ratings)} /> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RelatedProductsCard;