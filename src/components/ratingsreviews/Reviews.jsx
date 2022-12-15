import React from 'react';
import { useState, useEffect } from 'react';
import SortOptions from './SortOptions.jsx';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReviewsList from './ReviewsList.jsx';

const Reviews = ({product, meta, sortBy, reviews, filterStars, reviewsCount, starFilterActive}) => {

  const transitionCSS = {
    transition: "all 0.75s ease-out"
  }

  return (
    <div className="max-h-halfScreen overflow-auto overscroll-contain py-5 duration-75 transition-transform" style={transitionCSS}>
      <ReviewsList reviews={reviews} filterStars={filterStars} reviewsCount={reviewsCount} starFilterActive={starFilterActive}/>
    </div>
  );
};

export default Reviews;