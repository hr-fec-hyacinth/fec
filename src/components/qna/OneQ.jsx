import React from 'react';

const OneQ = ({ questionData }) => {

  var result;
  if (questionData)
    result = <div>Q: {questionData.question_body}</div>;
  else
    result = <div>Loading question</div>;

  return (
    <>
      {result}
    </>
  )
}

export default OneQ;