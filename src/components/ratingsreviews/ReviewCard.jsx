import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';


const ReviewCard = ({aReview}) => {

  const dateString = aReview.date;
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  let reviewerName = 'Anonymous User';

  if(aReview.reviewer_name) {
    reviewerName = aReview.reviewer_name;
  }

  return (
    <div id="ReviewCard" className="bg-slate-200 mx-auto p-3 mb-3 border-b-2 border-black shadow-md hover:shadow-xl">
    <div className="flex flex-wrap">
      <div className="flex-none">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <div class="grow"></div>
      <div className="flex-none text-xs align-middle">{reviewerName}, {formattedDate}</div>
    </div>
    <div className='font-semibold truncate'>
      {aReview.summary}
    </div>
    <div className='font-light'>
      ... line, if necessary
    </div>
    <div className='font-light'>
      {aReview.body}
    </div>
    {aReview.recommend &&
      <div>
        <span className="text-sm">
          <AiFillCheckCircle className="text-blue-400 inline-block" /> I recommend this product
        </span>
      </div>
    }
    <div>
      <p className='text-xs'>
        Helpful?  <span>Yes</span> ({aReview.helpfulness})  |  <span>No</span>
      </p>
    </div>
  </div>
  )
};

export default ReviewCard;