import React, { useState , useEffect} from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import StarDisplayQuarters from './StarDisplayQuarters.jsx';
import api from '../../../server/api.js';
import Thumbnails from './../shared/Thumbnails.jsx'

const ReviewCard = ({aReview}) => {
  const [expand, setExpand] = useState(false);
  const [clickIndex, setClickIndex] = useState(0)
  const [imageIndex, setImageIndex] = useState(0);
  const [isHelpful, setIsHelpful] = useState(0);

  useEffect(() => {
    aReview.helpfulness ? setIsHelpful(aReview.helpfulness) : isHelpful;
  }, []);

  const dateString = aReview.date;
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  let reviewerName = 'Anonymous User';
  if(aReview.reviewer_name) {
    reviewerName = aReview.reviewer_name;
  }

  const renderResponse = aReview.response ? (<div className="w-9/12 justify-center">aReview.response</div>) : (<div></div>);

  const handleOnImageClick = (e) => {
    setImageIndex(Number(e.currentTarget.getAttribute('i')));
    setExpand(true);
  }

  let helpfulness = aReview.helpfulness ? helpfulness = aReview.helpfulness : helpfulness = 0;

  const onHelpfulClick = (e) => {
    api.voteHelpfulReview(aReview.review_id).
      then((result) => {
        helpfulness+= 1;
        console.log('post works', helpfulness);
      }).
      then((result) => {
        setIsHelpful(isHelpful + 1);
      }).
      catch((err) => {return new Error('could not add')});
  }

  return (
    <div className="bg-slate-100 mx-auto p-3 mb-3 border-b-2 border-slate-700 shadow-md hover:shadow-xl
         dark:text-white dark:bg-white/20 dark:border-white rounded-lg" data-testid='reviewCard'>
      <div className="flex flex-wrap">
        <div className="flex-none"><StarDisplayQuarters number={aReview.rating} /></div>
        <div className="grow"></div>
        <div className="flex-none text-xs align-middle">{reviewerName}, {formattedDate}</div>
      </div>
      <div className='font-semibold truncate'>{aReview.summary}</div>
      <div className='font-light'>
        {aReview.body}
        {renderResponse}
      </div>
      <Thumbnails photosSrcList={aReview.photos.map(p => p.url)} expandOnClick={true} />
      {aReview.recommend &&
      <div>
        <span className="text-sm">
          <AiFillCheckCircle className="text-blue-400 inline-block" /> I recommend this product
        </span>
      </div>}

      <div className='text-xs'>
        Helpful?  <span onClick={onHelpfulClick}>Yes</span> ({isHelpful})  |  <span>No</span>
      </div>
    </div>
  )
};

export default ReviewCard;