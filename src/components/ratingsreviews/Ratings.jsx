import React from 'react';
import { useState, useEffect } from 'react';

const Ratings = ({product, meta}) => {
  const [averageRating, setAverageRating] = useState(0);

  // calculates Average Rating i:Object o: average num
  const calculateAverage = (ratings) => {
    let totalRating = 0;
    let totalVotes = 0;

    Object.keys(ratings).forEach(el => {
      totalRating += Number(ratings[el]) * el;
      totalVotes += Number(ratings[el]);
    })

    // return parseFloat((totalRating / totalVotes)).toFixed(2) ;
    return (totalRating / totalVotes).toFixed(1);
  }

  // calculateAverage();

  // calculates average rating upon load
  useEffect(() => {
    if(meta.ratings) {
      setAverageRating(calculateAverage(meta.ratings));
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