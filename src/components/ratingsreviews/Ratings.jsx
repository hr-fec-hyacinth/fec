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
    <div id='ratings' className="w-4/12 pt-3" >
      {averageRating && <p className="text-3xl">{averageRating}</p>}
      <p className="text-xs"><span>100%</span> of reviews recommend this product</p>
      {meta.ratings && <RatingsChart metaRatings={meta.ratings} />}
      {meta.characteristics &&
        <CharacteristicsList characteristics={meta.characteristics}
      />}
    </div>
  )
}

export default Ratings;