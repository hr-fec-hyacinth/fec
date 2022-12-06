import React from 'react';
import { useState, useEffect } from 'react';
import { calculateAverageRating } from './reviewsHelper.js';
import CharacteristicsList from './CharacteristicsList.jsx';
import RatingsChart from './RatingsChart.jsx';

const Ratings = ({product, meta}) => {
  const [averageRating, setAverageRating] = useState(0);

  // calculates average rating upon load
  useEffect(() => {
    if(meta.ratings) {
      setAverageRating(calculateAverageRating(meta.ratings));
    }
  }, [meta]);

  return (
    <div id='ratings' className="w-4/12 p" >
      {averageRating && <h3>{averageRating}</h3>}
      <div>100% of reviews recommend this product</div>
      {/* {meta.product_id} */}
      {meta.ratings && <RatingsChart metaRatings={meta.ratings}/>}
      {meta.characteristics &&
        <CharacteristicsList characteristics={meta.characteristics}
      />}
    </div>
  )
}

export default Ratings;