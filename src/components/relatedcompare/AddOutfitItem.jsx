import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import Stars from '../shared/Stars.jsx'

const AddOutfitItem = ({ slide, product, switchProduct, styles, metaReview, outfit, setOutfit, setCurrentIndex }) => {
  const category = slide[1].category;
  const name = slide[1].name;
  const image = slide[0][0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=Product Image';
  const sale_price = '$' + slide[0][0].sale_price;
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
      <RxCrossCircled onClick={removeFromOutfitList} className='relative cursor-pointer z-8 left-52 top-6 hover:text-white' productid={slide[1].id} />
        <div onClick={eventHandler} className='container h-96 w-58 border border-black cursor-pointer' productid={slide[1].id}>
          <img className='h-58 w-58' src={image} alt='Product Picture'/>
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

export default AddOutfitItem;