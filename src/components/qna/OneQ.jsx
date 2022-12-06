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
      <div className="flex">
        <div>Q: {questionData.question_body}</div>
        <div>Helpful?</div>
        <div onClick={handleYesClick}>Yes ({helpfulness}) |</div>
        <div>Add Answer</div>
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