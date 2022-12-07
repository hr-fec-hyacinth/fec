import React from 'react';
import { useState, useEffect } from 'react';
import { calculateAverageRating } from './reviewsHelper.js';
import CharacteristicsList from './CharacteristicsList.jsx';
import RatingsChart from './RatingsChart.jsx';

const Ratings = ({product, meta, ratingsCB, starFilter}) => {
  const [averageRating, setAverageRating] = useState(0);

  // calculates average rating upon load
  useEffect(() => {
    if(meta.ratings) {
      setAverageRating(calculateAverageRating(meta.ratings));
    }
  }, [meta]);

  return (
    <div>
      {averageRating && <p className="text-3xl">{averageRating}</p>}
      <p className="text-xs"><span>100%</span> of reviews recommend this product</p>
      {meta.ratings && <RatingsChart metaRatings={meta.ratings} ratingsCB={ratingsCB} starFilter={starFilter}/>}
      {meta.characteristics &&
        <CharacteristicsList characteristics={meta.characteristics}
      />}
    </div>
  )
}

export default Ratings;