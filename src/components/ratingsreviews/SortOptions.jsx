import React from 'react';
import { useState, useEffect } from 'react';
import totalReviews from '../../helper/totalReviews.js'


const SortOptions = ({meta, cb}) => {

  let totalNumReviews = 0;
  if(meta.ratings) {
    totalNumReviews = totalReviews(meta.ratings)
  };

  return (
    <>
      {totalNumReviews &&
      <div>
        {totalNumReviews} reviews, sorted by <span style={{backgroundColor: 'YELLOW'}}>Newest</span>
      </div>}
    </>
  )
}

export default SortOptions;