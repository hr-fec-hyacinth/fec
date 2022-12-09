import React from 'react';
import { useState, useEffect } from 'react';
import totalReviews from '../../helper/totalReviews.js'


const SortOptions = ({meta, sortBy, sortCB}) => {

  let totalNumReviews = 0;
  if(meta.ratings) {
    totalNumReviews = totalReviews(meta.ratings)
  };

  return (
    <>
      {totalNumReviews && sortBy &&
      <div>
        <span className="inline">{totalNumReviews}</span> reviews, sorted by:
        <div style={{display: 'inline-Block'}}>
          <select name="sortByList" id="sortReviews" value={sortBy} onChange={sortCB}>
            <option value="relevance"> relevance </option>
            <option value="newest"> newest </option>
            <option value="helpfulness"> helpfulness </option>
          </select>
        </div>
      </div>}
    </>
  )
}

export default SortOptions;