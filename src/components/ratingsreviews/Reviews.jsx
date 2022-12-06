import React from 'react';
import { useState, useEffect } from 'react';
import SortOptions from './SortOptions.jsx';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReviewsList from './ReviewsList.jsx';

// filterStars is selected by
const Reviews = ({product, meta, sortBy, reviews, filterStars}) => {
  // const [sortBy, setSortBy] = useState('')
  // const [reviews, setReviews] = useState([]);
  // if (reviews) {
  //   console.log('inside ReviewsList', reviews)
  // }

  return (
    <div>
      <ReviewsList reviews={reviews} />
    </div>
  );
};

export default Reviews;