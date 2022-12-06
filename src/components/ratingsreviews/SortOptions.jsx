import React from 'react';
import { useState, useEffect } from 'react';
import totalReviews from '../../helper/totalReviews.js'


const SortOptions = ({meta, sortBy, cb}) => {

  let totalNumReviews = 0;
  if(meta.ratings) {
    totalNumReviews = totalReviews(meta.ratings)
  };

  return (
    <>
      {totalNumReviews && sortBy &&
      <div>
        {totalNumReviews} reviews, sorted by:
        <div style={{display: 'inline-Block'}}>
          {sortBy}
          <select name="sortByList" id="sortReviews">
            <option value="Relevance"> Relevance </option>
            <option value="Newest"> Newest </option>
            <option value="Helpfulness"> Helpfulness </option>
          </select>
        </div>
      </div>}
    </>
  )
}

export default SortOptions;