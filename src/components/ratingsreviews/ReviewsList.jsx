import React from 'react';
import ReviewCard from './ReviewCard.jsx';

const ReviewsList = ({reviews, filterStars, displayNum}) => {

  // if (reviews) {
  //   console.log('inside ReviewsList', reviews)
  // }

  // let toRender = [];
  // if(reviews) {
  //   for(var i = 0; i < 2; i++) {
  //   console.log('this should be the el', reviews[i]);
  //   toRender.push(
  //     (<ReviewCard aReview={reviews[i]} />)
  //   )
  //   console.log('this is to render', toRender);
  // }
  // } .
  console

  let filteredList = [];
  filteredList = reviews.filter((el, i) => {
    return filterStars[el.rating];
  })
  console.log('before filter', reviews)
  console.log('after filter', filteredList)

  return (
    <>
    {reviews &&
    <div className="">
      {reviews.map(el => {
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