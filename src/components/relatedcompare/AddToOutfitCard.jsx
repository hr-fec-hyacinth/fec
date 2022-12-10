import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import averageRating from '../../helper/averageRating.js';


const AddToOutfitCard = ({ slide, product, styles, metaReview, outfit, setOutfit }) => {

  const eventHandler = (e) => {
    e.preventDefault();
    const starRating = averageRating(metaReview.ratings)
    let count = 1;

    outfit.forEach((item, index) => {
      if (outfit.length === 1) {
        setOutfit([...outfit, [styles, product, starRating]]);
        count++;
      } else if (index !==0 && item[1].id !== product.id) {
        count++;
      }
    })
    if (count === outfit.length) {
      setOutfit([...outfit, [styles, product, starRating]]);
    }
  }

  return (
    <>
      <div className='px-2'>
      <RxCrossCircled className='relative cursor-pointer -z-8 left-42 top-6 text-transparent' />
        <div onClick={eventHandler} className='container h-84 w-58 border border-black cursor-pointer dark:border-white'>
          <img className='max-h-58' src={slide.image} alt='Product Picture'/>
            <div className='pt-pad bg-white/30 text-center font-bold'>Add to Outfit</div>
        </div>
      </div>
    </>
  )
}

export default AddToOutfitCard;