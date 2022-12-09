import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';

const AddToOutfitCard = ({ slide, product, styles, metaReview, outfit, setOutfit }) => {
  const eventHandler = (e) => {
    e.preventDefault();
    let count = 1;
    outfit.forEach((item, index) => {
      if (outfit.length === 1) {
        setOutfit([...outfit, [styles, product, metaReview]]);
        count++;
      } else if (index !==0 && item[1].id !== product.id) {
        count++;
      }
    })
    if (count === outfit.length) {
      setOutfit([...outfit, [styles, product, metaReview]]);
    }
  }

  return (
    <>
      <div className='px-2'>
      <RxCrossCircled className='relative cursor-pointer z-8 left-42 top-6 text-transparent' />
        <div onClick={eventHandler} className='container h-84 w-58 border border-black cursor-pointer'>
          <img className='max-h-58' src={slide.image} alt='Product Picture'/>
          <div>
            <br/>
            <div className='text-center font-bold'>Add to Outfit</div><br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToOutfitCard;