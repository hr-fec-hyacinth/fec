import React from 'react';
import { useState, useEffect } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import ReviewForm from './ReviewForm.jsx';
import SortOptions from './SortOptions.jsx';
import api from '../../../server/api.js';

const RatingsReviews = ({product, meta}) => {
  // Retrieves Reviews of Current Product
  // Retrieves Reviews of Product Metadata
  // Sets form render to false on initial load
  const [activeForm, setActiveForm] = useState(false);
  const [reviews, setReviews] = useState ([]);
  const [reviewsCount, setReviewsCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevance');
  const [starFilter, setStarFilter] = useState('');

  // if(product) {
  //   console.log('this is the product being passed in', product);
  //   console.log(product.id);
  // }

  // useEffect that calls the API documentation.
  useEffect(()=> {
    // console.log(product.product_id);
    if(product) {
      api.getReviews(Number(37313), 1, reviewsCount, sortBy)
      .then(res => {
        // console.log('result from api req', res);
        // console.log('this should be the array of reviews', res);
        setReviews(res.results);
      })
    }
  }, [product, sortBy, reviewsCount]);

  // if(reviews) {
  //   console.log('reviews can be seen', reviews);
  // }

  // this is going to be an object that handles the various types of form submissions
    // stars handles filtering by stars and changes the starFilter
    // moreReviews adds two to the number of reviews to load.
  const handleOnClick = {
    stars: () => {},
    sortBy: (e) => {
      e.preventDefault();
      // console.log('this is the event target value', e.target.value);
      setSortBy(e.target.value);
    },
    moreReviews: (e) => {
      e.preventDefault();
      setReviewsCount(reviewsCount + 2);
    },
    toggleForm: (e) => {
      e.preventDefault();
      setActiveForm(!activeForm);
    }
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
          <SortOptions meta={meta} sortBy={sortBy} sortCB={handleOnClick.sortBy} />
          <Reviews product={product} meta={meta} sortBy={sortBy} reviews={reviews} />
          <div className="space-x-2">
            <button id='loadMoreReviews'
              className='drop-shadow-lg
                border-2 border-indigo-300
                px-2 py-2
                hover:scale-105'
              onClick={handleOnClick.moreReviews}
              >MORE REVIEWS
            </button>
            <button id='submitReview' className='drop-shadow-lg
              border-2 border-indigo-300
              px-2 py-2
              hover:scale-105'
              onClick={handleOnClick.toggleForm}
              >ADD A REVIEW +
            </button>
          </div>
        </div>
      </div>
      {activeForm && <ReviewForm product={product} onFormSubmit={handleOnClick.toggleForm} />}
    </div>
  )
}

export default RatingsReviews;