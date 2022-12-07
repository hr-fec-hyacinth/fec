import React from 'react';
import { useState, useEffect } from 'react';
import SortOptions from './SortOptions.jsx';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReviewsList from './ReviewsList.jsx';

// filterStars is selected by
const Reviews = ({product, meta, sortBy, reviews, filterStars, reviewsCount, starFilterActive}) => {

  return (
    <div className="max-h-96 overflow-auto overscroll-contain py-5">
      <ReviewsList reviews={reviews} filterStars={filterStars} reviewsCount={reviewsCount} starFilterActive={starFilterActive}/>
    </div>
  );
};

export default Reviews;