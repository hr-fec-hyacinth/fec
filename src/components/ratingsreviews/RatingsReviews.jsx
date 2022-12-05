import React from 'react';
import { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import ReviewForm from './ReviewForm.jsx';

const RatingsReviews = ({product, meta}) => {
  // Retrieves Reviews of Current Product
  // Retrieves Reviews of Product Metadata
  // Sets form render to false on initial load

  const [renderForm, setRenderForm] = useState(false);

  // ReviewForm component purposefully added in but prevented from being rendered
  return (
    <div id='ratings-reviews'>
      RATINGS & REVIEWS
      <div className="flex m-2">
        <Ratings product={product} meta={meta}/>
        <Reviews product={product} />
      </div>
      {renderForm && <ReviewForm product={product} />}
    </div>
  )
}

export default RatingsReviews;