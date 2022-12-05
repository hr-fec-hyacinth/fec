import React from 'react';
import { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import RatingReviewForm from './RatingReviewForm.jsx';

const RatingsReviews = ({product}) => {
  // Retrieves Reviews of Current Product
  // Retrieves Reviews of Product Metadata
  const [] =

  return (
    <div id='ratings-reviews'>
      RATINGS & REVIEWS
      <Ratings product={product} />
      <Reviews product={product}/>
      <ReviewForm product={product}/>
    </div>
  )
}

export default RatingsReviews;