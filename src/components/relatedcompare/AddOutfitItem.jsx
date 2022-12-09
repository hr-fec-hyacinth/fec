import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import Stars from '../shared/Stars.jsx'
import averageRating from '../../helper/averageRating.js';

const AddOutfitItem = ({ slide, product, switchProduct, styles, metaReview, outfit, setOutfit, setCurrentIndex, index }) => {
  const category = slide[1].category;
  const name = slide[1].name;
  const image = slide[0][0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=Product Image';
  const sale_price = slide[0][0].sale_price || '1.00';
  const original_price = '$' + slide[0][0].original_price;

  const eventHandler = (e) => {
    e.preventDefault();
    switchProduct(e.currentTarget.getAttribute('productid'));
  }

  const removeFromOutfitList = (e) => {
    e.preventDefault();
    setOutfit(outfit.filter((item, index) => {
      if (index === 0) {
        return item;
      } else if (JSON.stringify(item[1].id) !== e.currentTarget.getAttribute('productid')) {
        return item;
      }
      return false;
    }));
    setCurrentIndex(0);
  }

  return (
    <>
      <div className='px-2'>
      {index !== 3 && <RxCrossCircled onClick={removeFromOutfitList} className='relative cursor-pointer z-8 left-52 top-6 hover:text-white' productid={slide[1].id} />}
      {index === 3 && <RxCrossCircled className='relative -z-20 left-52 top-6 text-transparent' />}
        <div onClick={eventHandler} className='container h-84 w-58 border border-black cursor-pointer' productid={slide[1].id}>
          <div style={{backgroundImage: 'url(' + image + ')'}} className='bg-center' >
            <img className='object-contain h-58 w-58' src={image} alt='Product Picture'/>
          </div>
          <div className='p-2'>
            <div className='text-xs'>{category.toUpperCase()}</div>
            <div className='pt-1 text-sm font-bold'>{name}</div>
            {sale_price && <><span className='text-red-500 py-2 text-xs'>{'$' + sale_price.slice(0, -3)}</span> <span className='line-through py-2 pl-4 text-xs'>{original_price.slice(0, -3)}</span></>}
            {!sale_price && <div className='py-2 text-xs'>{original_price.slice(0, -3)}</div>}
            <div className='pt-2.5'> <Stars  /> </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AddOutfitItem;