import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import totalReviews from '../../helper/totalReviews.js';
import { calculateAverageRating } from './reviewsHelper.js';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import ReviewForm from './ReviewForm.jsx';
import SortOptions from './SortOptions.jsx';
import StarDisplayQuarters from './StarDisplayQuarters.jsx'

const RatingsReviews = ({product, meta}) => {
  const [activeForm, setActiveForm] = useState(false);
  const [reviews, setReviews] = useState ([]);
  const [reviewsCount, setReviewsCount] = useState(2);
  const [sortBy, setSortBy] = useState('relevance');
  const [starFilterActive, setStarFilterActive] = useState(false);
  const [starFilter, setStarFilter] = useState({
    "filterOn": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false
  });

  useEffect(()=> {
    if(product.id) {
      api.getReviews(Number(product.id), 1, 200, sortBy)
      .then(res => {
        setReviews(res.results);
      })
    }
  }, [product, sortBy]);

  const handleOnClick = {
    stars: (starNum) => {
      setStarFilter({
        ...starFilter,
        [starNum]: !starFilter[starNum]
      })
    },
    sortBy: (e) => {
      e.preventDefault();
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
  //---CSS--------------------------------------//
  const buttonCSS = 'flex drop-shadow-lg border-2 border-indigo-300 px-2 py-2 hover:scale-105';

  //----------------------RENDERS---------------//
  const totalNumReviews = 0;

  return (
    <div>
    {meta.ratings &&
    <div id='ratings-reviews' className="pt-10 pb-3 mx-2 mb-10">
      <span>RATINGS & REVIEWS</span>
      <div className="flex flex-col sm:flex-row space-x-3">
        <div id='ratings' className="w-10/12 m-x-3 mx-auto justify-center sm:w-4/12 pt-3" >
          <StarDisplayQuarters number={calculateAverageRating(meta.ratings)}/>
          <Ratings product={product} meta={meta} ratingsCB={handleOnClick.stars} starFilter={starFilter}/>
        </div>
        <div id='review' className="w-11/12 mx-auto sm:w-8/12 justify-center">
          <SortOptions meta={meta} sortBy={sortBy} sortCB={handleOnClick.sortBy} />
          <Reviews product={product} meta={meta}
                   sortBy={sortBy} reviews={reviews} filterStars={starFilter}
                   reviewsCount={reviewsCount} starFilterActive={starFilterActive} />
          <div className="flex grow space-x-4 sm:mx-auto sm:space-x-2 my-2.5">
            {((totalReviews(meta.ratings) >= reviewsCount) || (totalReviews(meta.ratings) > 0)) &&
            <button id='loadMoreReviews' className={buttonCSS} onClick={handleOnClick.moreReviews}>
              MORE REVIEWS
            </button>}
            <button id='submitReview' className={buttonCSS} onClick={handleOnClick.toggleForm}>
              ADD A REVIEW +
            </button>
          </div>
        </div>
      </div>
    </div>}
    <div className='form-container'>
      {activeForm &&
      <ReviewForm product={product} meta={meta} onFormSubmit={setActiveForm} />}
    </div>
    </div>
  )
}

export default RatingsReviews;