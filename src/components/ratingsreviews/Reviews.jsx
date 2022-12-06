import React from 'react';
import { useState, useEffect } from 'react';
import SortOptions from './SortOptions.jsx';

// filterStars is selected by
const RatingsReviews = ({product, meta, filterStars}) => {
  const [sortBy, setSortBy] = useState('')
  const [reviews, setReviews] = useState([]);

  return (
    <div id='review' className="w-8/12">
      <SortOptions meta={meta} />
      <div id="ReviewList" className="flex h-48 bg-slate-200">
        <p>&#9733;&#9733;&#9733;&#9733;</p>
      </div>
    </div>
  );
};

export default RatingsReviews;