import React, { useState, useEffect } from 'react';

const OneQ = ({ questionData }) => {

  const [helpfulness, setHelpfulness] = useState(0);

  useEffect(() => {
    if (questionData)
      setHelpfulness(questionData.question_helpfulness)
  }, [questionData])

  const handleYesClick = () => {
    setHelpfulness(questionData.question_helpfulness+1)
  }

  var result;
  if (questionData)
    result = (
      <div className="flex my-3 gap-x-3 items-center">
        <div className='font-bold'>Q:</div>
        <div className='font-bold'>{questionData.question_body}</div>
        <div className='self-end self-center ml-auto text-netural-500 text-xs font-semibold'>Helpful?</div>
        <div className='text-netural-500 text-xs font-semibold underline' onClick={handleYesClick}>Yes</div>
        <div className='text-netural-500 text-xs'>({helpfulness})</div>
        <div className='text-netural-500 text-xs'>|</div>
        <div className='text-netural-500 text-xs underline'>Add Answer</div>
      </div>
    );
  else
    result = <div>Loading question</div>;

  return (
    <>
      {result}
    </>
  )
}

export default OneQ;