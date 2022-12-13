import React from 'react';
import { useState, useEffect } from 'react';
import { calculateAverageRating } from './reviewsHelper.js';
import CharacteristicsList from './CharacteristicsList.jsx';
import RatingsChart from './RatingsChart.jsx';
import StarDisplayQuarters from './StarDisplayQuarters.jsx'

const Ratings = ({product, meta, ratingsCB, starFilter}) => {
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if(meta.ratings) {
      setAverageRating(calculateAverageRating(meta.ratings));
    }
  }, []);

  const percentRecommended = meta.recommended ?
    Math.round(
      (((Number(meta.recommended.true) /
        (Number(meta.recommended.true) + Number(meta.recommended.false)))) * 100)) :
    'A lot';

  return (
    <div>
      {averageRating && <p className="text-3xl">{averageRating}</p>}
      <p className="text-xs"><span>{percentRecommended}</span> of reviews recommend this product</p>
      {meta.ratings && <RatingsChart metaRatings={meta.ratings} ratingsCB={ratingsCB} starFilter={starFilter}/>}
      {meta.characteristics &&
        <CharacteristicsList characteristics={meta.characteristics}
      />}
    </div>
  )
}

export default Ratings;