import React from 'react';
import ReviewCard from './ReviewCard.jsx';

const ReviewsList = ({reviews, filterStars, reviewsCount}) => {

  let isFilterOn = false;
  if(filterStars) {
    Object.keys(filterStars).forEach(el => {
      if (filterStars[el] === true) {
        isFilterOn = true;
      }
    })
  }

  let filteredList = [];
  if(reviews) {
    filteredList = reviews.slice(0, reviewsCount);
    let filteredList1 = [];
    // if(filterStars.filterOn)
    if(isFilterOn) {
      filteredList1 = reviews.filter((el, i) => {
        return filterStars[el.rating];
      })
      filteredList = filteredList1.slice(0, reviewsCount);
    }
  }

  return (
    <>
    {filteredList &&
    <div className="reviewsList" data-testid="reviewList">
      {filteredList.map(el => {
        return (
          <div key={el.review_id} className="ReviewCardContainer mx-auto px-3 " >
            <ReviewCard aReview={el} data-testid='reviewCardContainer' />
          </div>
        )
      }
      )}
    </div>}
    </>
  )
};

export default ReviewsList;