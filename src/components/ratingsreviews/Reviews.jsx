import React from 'react';
import { useState, useEffect } from 'react';
import SortOptions from './SortOptions.jsx';
import { AiFillCheckCircle } from 'react-icons/ai';
import ReviewsList from './ReviewsList.jsx';

// filterStars is selected by
const Reviews = ({product, meta, sortBy, reviews, filterStars}) => {
  // const [sortBy, setSortBy] = useState('')
  // const [reviews, setReviews] = useState([]);
  const [displayNum, setDisplayNum] = useState(2);

  if (reviews) {
    console.log('inside ReviewsList', reviews)
  }

  return (
    <div>
      <ReviewsList reviews={reviews} />

      <div className="space-x-2">
        <button id='loadMoreReviews'
          className='drop-shadow-lg
            border-2 border-indigo-300
            px-2 py-2
            hover:scale-105'>MORE REVIEWS
        </button>
        <button id='submitReview' className='drop-shadow-lg
          border-2 border-indigo-300
          px-2 py-2
          hover:scale-105'>ADD A REVIEW +
        </button>
      </div>
    </div>
  );
};

export default Reviews;