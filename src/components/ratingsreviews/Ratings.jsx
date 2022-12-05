import React from 'react';
import { useState, useEffect } from 'react';
import { calculateAverageRating } from './reviewsHelper.js';

const Ratings = ({product, meta}) => {
  const [averageRating, setAverageRating] = useState(0);

  // calculates average rating upon load
  useEffect(() => {
    if(meta.ratings) {
      setAverageRating(calculateAverageRating(meta.ratings));
    }
  }, [meta]);

  return (
    <div id='ratings'>
      {averageRating && <div>{averageRating}</div>}
      {meta.product_id}
    </div>
  )
}

export default Ratings;