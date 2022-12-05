import React from 'react';
import OneQ from './OneQ.jsx'
import AList from './AList.jsx'

const OneQnA = ({ questionData }) => {

  var aList;
  if (questionData) {
    aList = <AList answers={questionData['answers']}/>
  } else {
    aList = <div>Loading Answers</div>
  }

  return (
    <>
      <OneQ questionData={questionData}/>
      {aList}
    </>
  )
}

export default OneQnA;