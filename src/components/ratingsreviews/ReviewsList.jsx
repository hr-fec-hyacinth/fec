import React from 'react';
import ReviewCard from './ReviewCard.jsx';

const ReviewsList = ({reviews, filterStars, reviewsCount}) => {

  // console.log(reviewsCount);
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
    // console.log('this is the number to display', reviewsCount);
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
  // console.log('before filter', reviews)
  // console.log('after filter', filteredList)

  return (
    <>
    {filteredList &&
    <div className="">
      {filteredList.map(el => {
        return (
          <div key={el.review_id} id="a-review" className="mx-auto px-3">
            <ReviewCard aReview={el} />
          </div>
        )
      }
      )}
    </div>}
    </>
  )
};

export default ReviewsList;