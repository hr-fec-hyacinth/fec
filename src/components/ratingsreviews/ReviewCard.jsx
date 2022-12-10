import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import StarDisplayQuarters from './StarDisplayQuarters.jsx'


const ReviewCard = ({aReview}) => {

  const dateString = aReview.date;
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  let reviewerName = 'Anonymous User';
  if(aReview.reviewer_name) {
    reviewerName = aReview.reviewer_name;
  }

  //renders the response.
  const renderResponse = aReview.response ? (<div className="w-9/12 justify-center">aReview.response</div>) : (<div></div>);
  // var loadImages = if (aReview.photos) {
  //   ({aReview.photos.map(el, i => {
  //     <img src={el} key={el, i}/>
  //   })})
  // } else {
  //   <></>
  // };

  const sometext = '';

  return (
    <div id="ReviewCard" className="bg-slate-100 mx-auto p-3 mb-3 border-b-2 border-black shadow-md hover:shadow-xl">
      <div className="flex flex-wrap">
        <div className="flex-none"><StarDisplayQuarters number={aReview.rating} /></div>
        <div className="grow"></div>
        <div className="flex-none text-xs align-middle">{reviewerName}, {formattedDate}</div>
      </div>
      <div className='font-semibold truncate'>{aReview.summary}</div>
      <div className='font-light'>{sometext}</div>
      <div className='font-light'>
        {aReview.body}
        {renderResponse}
      </div>

      {aReview.photos.length > 0 &&
      <div className='flex flex-row flex-shrink flex-grow overflow-auto'>
        {aReview.photos.map(el => {
          return (
            <div className="w-2/12 space-x-4" key={'photo' + el.id}>
              <img src={el.url} key={'url_id' + el.id} className="object-contain" />
            </div>
          )}
        )}
      </div>}

      {aReview.recommend &&
        <div>
          <span className="text-sm">
            <AiFillCheckCircle className="text-blue-400 inline-block" /> I recommend this product
          </span>
        </div>
      }

      <div className='text-xs'>
        Helpful?  <span>Yes</span> ({aReview.helpfulness})  |  <span>No</span>
      </div>

    </div>
  )
};

export default ReviewCard;