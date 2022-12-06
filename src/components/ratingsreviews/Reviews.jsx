import React from 'react';
import { useState, useEffect } from 'react';
import totalReviews from '../../helper/totalReviews.js'
import SortOptions from './SortOptions.jsx';

// filterStars is selected by
const RatingsReviews = ({product, meta, filterStars}) => {
  const [sortBy, setSortBy] = useState('')
  const [reviews, setReviews] = useState([]);

  return (
    <div id='review' className="w-8/12">
      <SortOptions meta={meta} />
    </div>
  );
};

export default RatingsReviews;