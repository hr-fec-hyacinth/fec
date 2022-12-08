import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';

const OneA = ({ answer }) => {
  const date = new Date(answer.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [helpfulness, setHelpfulness] = useState(0);
  const [reported, setReported] = useState(false);

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

  if(reported) {
    var reportComp = <div  className='ml-3'>Reported</div>
  } else {
    var reportComp = <div className='ml-3 underline' onClick={handleReportClick}>Report</div>
  }

  return (
    <>
      <div className='flex gap-x-3 items-center mb-0.5'>
        <div className='font-bold'>A:</div>
        <div className='text-sm'>{answer.body}</div>
      </div>
      <div className="flex text-xs mb-2 text-neutral-400">
        <div className='ml-7'>by: {answer.answerer_name}, {formattedDate}</div>
        <div className='ml-3'>|</div>
        <div className='ml-3'>Helpful?</div>
        <div className='ml-1 underline' onClick={handleYesClick}>Yes</div>
        <div className='ml-1'>({helpfulness})</div>
        <div className='ml-3'>|</div>
        {reportComp}
      </div>
    </>
  )
}

export default OneA;