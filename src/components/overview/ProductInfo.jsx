import React from 'react';
import totalReviews from '../../helper/totalReviews.js';
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { ImPinterest } from "react-icons/im"
import Social from './Social.jsx';
import Stars from '../shared/Stars.jsx';

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
    <div className='ml-1 text-center sm:text-left text-2xl sm:text-base'>
      <Stars />
      {reviewCount && <p><a className='text-stone-400 underline' href="#ratings-reviews">Read all {reviewCount} reviews</a></p>}
      <p className='sm:text-sm'>{product.category}</p>
      <p className='sm:text-2xl text-5xl sm:mb-0 mb-2'>{product.name}</p>
      {!salePrice && <p className='text-4xl sm:text-xl sm:mb-0 mb-2'>${price}</p>}
      {salePrice && <p className='sm:text-xl text-4xl sm:mb-0 mb-2'><span className='text-red-600 mr-2'>${salePrice}</span><span className='line-through sm:mb-0 mb-2'>${price}</span></p>}
      <div className='sm:block hidden'>
        <Social />
      </div>
    </div>
  )
};

export default ProductInfo;