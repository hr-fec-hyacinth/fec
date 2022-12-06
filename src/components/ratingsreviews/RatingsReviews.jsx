import React from 'react';
import { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import ReviewForm from './ReviewForm.jsx';
import api from '../../../server/api.js';

const RatingsReviews = ({product, meta}) => {
  // Retrieves Reviews of Current Product
  // Retrieves Reviews of Product Metadata
  // Sets form render to false on initial load
  const [activeForm, setActiveForm] = useState(false);
  const [reviews, setReviews] = useState ([]);
  const [sortBy, setSortBy] = useState('Relevance');
  const [starFilter, setStarFilter] = useState('');

  // if(product) {
  //   console.log('this is the product being passed in', product);
  //   console.log(product.id);
  // }

  // useEffect that calls the API documentation.
  useEffect(()=> {
    // console.log(product.product_id);
    if(product) {
      api.getReviews(Number(product.id), sortBy)
      .then(res => {
        console.log('result from api req', res);
        console.log('this should be the array of reviews', res);
        setReviews(res.results);
      })
    }
  }, [product, sortBy]);

  if(reviews) {
    console.log('reviews can be seen', reviews);
  }

  // this is going to be an object that handles the various types of form submissions
    // stars handles filtering by stars and changes the starFilter
    // moreReviews adds two to the number of reviews to load.
  const handleOnClick = {
    stars: () => {},
    moreReviews: () => {},
    addForm: () => {}
  }


  // ReviewForm component purposefully added in but prevented from being rendered
  return (
    <div id='ratings-reviews' className="pt-10 pb-3">
      RATINGS & REVIEWS
      <div className="flex space-x-3">
        <div id='ratings' className="w-4/12 pt-3" >
          <Ratings product={product} meta={meta} />
        </div>
        <div id='review' className="w-8/12">
          <Reviews product={product} meta={meta} sortBy={sortBy} reviews={reviews} />
        </div>
      </div>
      {activeForm && <ReviewForm product={product} />}
    </div>
  )
}

export default RatingsReviews;