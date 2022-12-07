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
    <div className='ml-1'>
      <Stars />
      {reviewCount && <p><a className='text-stone-400 underline' href="#ratings-reviews">Read all {reviewCount} reviews</a></p>}
      <p>{product.category}</p>
      <p>{product.name}</p>
      {!salePrice && <p>${price}</p>}
      {salePrice && <p><span className='text-red-600 mr-2'>${salePrice}</span><span className='line-through'>${price}</span></p>}
      <p>{product.description}</p>
      <Social />
    </div>
  )
};

export default ProductInfo;