import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import Expanded from './Expanded.jsx'

const OneA = ({ answer }) => {
  const date = new Date(answer.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [helpfulness, setHelpfulness] = useState(0);
  const [reported, setReported] = useState(false);
  const [expand, setExpand] = useState(false);
  const [clickIndex, setClickIndex] =useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setHelpfulness(answer.helpfulness)
  }, [answer])

  const handleYesClick = () => {
    setHelpfulness(answer.helpfulness+1)
    api.putHelpfulAnswer(answer.id)
    .then(response => {
      if (response.status !== 204) {
        console.warn('Response code is not 204')
        console.log(response)
      }
    })
    .catch(err => console.log('Error in OneA putHelpfulAnswer api call:', err));
  }

  const handleReportClick = () => {
    setReported(true);
    api.putReportAnswer(answer.id)
    .then(response => {
      if (response.status !== 204) {
        console.warn('Response code is not 204')
        console.log(response)
      }
    })
    .catch(err => console.log('Error in OneA putReportAnswer api call:', err));
  }

  const handleThumbnailClick = e => {
    setImageIndex(Number(e.currentTarget.getAttribute('index')));
    setExpand(true);
  }

  if(reported) {
    var reportComp = <button className='ml-3'>Reported</button>
  } else {
    var reportComp = <button className='ml-3 underline' onClick={handleReportClick}>Report</button>
  }

  var nameComp;
  if(answer && answer.answerer_name === 'seller') {
    nameComp = <div className='font-bold text-neutral-600 dark:text-neutral-200 ml-1'>{answer.answerer_name}</div>;
  } else {
    nameComp = <div className='ml-1'>{answer.answerer_name}</div>;
  }

  const thumbnails = answer.photos.map((src, i) => <img className='max-w-[5rem] p-[3px] border rounded border-neutral-400 my-3 bg-white/30' src={src} key={i} onClick={handleThumbnailClick} index={i}/>);

  return (
    <>
      <div className='flex gap-x-3 items-center mb-0.5'>
        <div className='font-bold'>A:</div>
        <div className='text-sm'>{answer.body}</div>
      </div>
      <div className='flex flex-row gap-3 ml-7'>
        {thumbnails}
      </div>
      <div className="flex text-xs mb-2 text-neutral-400">
        <div className='ml-7'>by</div>
        {nameComp}
        <div>, {formattedDate}</div>
        <div className='ml-3'>|</div>
        <div className='ml-3'>Helpful?</div>
        <button className='ml-1 underline' onClick={handleYesClick}>Yes</button>
        <div className='ml-1'>({helpfulness})</div>
        <div className='ml-3'>|</div>
        {reportComp}
      </div>
      <div>
        {expand && <Expanded setExpand={setExpand} imageIndex={imageIndex} setImageIndex={setImageIndex} imageList={answer.photos} />}
      </div>
    </>
  )
}

export default OneA;