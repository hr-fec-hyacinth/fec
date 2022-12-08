import React from 'react';
import totalReviews from '../../helper/totalReviews.js';
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { ImPinterest } from "react-icons/im"
import Social from './Social.jsx';
import Stars from '../shared/Stars.jsx';
import averageRating from '../../helper/averageRating.js';

const {useState, useEffect} = React;

const ProductInfo = ({product, style, metaReview}) => {
  const [price, updatePrice] = useState('');
  const [salePrice, updateSalePrice] = useState('');
  const [reviewCount, updateReviewCount] = useState(0);

  // Calculate Price on style change
  useEffect(() => {
    updatePrice(style.original_price);
    if (style.sale_price !== '0' && style.sale_price) {
      updateSalePrice(style.sale_price);
    } else {
      updateSalePrice(null);
    }
  }, [style]);

  // Update Review Count on metaLoad
  useEffect(() => {
    if (metaReview.ratings) {
      updateReviewCount(totalReviews(metaReview.ratings));
    }
  }, [metaReview]);

  return (
    <div className='ml-2 mt-1 text-center sm:text-left text-xl sm:text-base'>
      <div className='sm:block hidden'>
        <Social />
      </div>
      {reviewCount && <span className='flex justify-left mt-1'><Stars ratings={averageRating(metaReview.ratings)}/><a className='text-stone-400 underline text-xs ml-2' href="#ratings-reviews">Read all {reviewCount} reviews</a></span>}
      <p className='text-sm mt-2 italic'>{product.category}</p>
      <p className='text-2xl sm:text-4xl font-extrabold sm:mb-0 mb-2'>{product.name}</p>
      {!salePrice && <p className='text-xl sm:mb-0 mb-2 mt-2'>${price}</p>}
      {salePrice && <p className=' text-xl sm:mb-0 mb-2 mt-2'><span className='text-red-600 mr-2'>${salePrice}</span><span className='line-through sm:mb-0 mb-2'>${price}</span></p>}

    </div>
  )
};

export default ProductInfo;