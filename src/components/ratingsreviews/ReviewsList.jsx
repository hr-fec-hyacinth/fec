import React from 'react';
import ReviewCard from './ReviewCard.jsx';

const ReviewsList = ({reviews, displayNum}) => {

  return (
    <div id="ReviewList" className="mx-auto px-3">
      <ReviewCard />
    </div>
  )
};

export default ReviewsList;