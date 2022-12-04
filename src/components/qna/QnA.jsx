import React from 'react';
import magnifiyingGlass from './../../assets/loupe.png';


const QnA = () => {

  return (
    <>
      <div>QUESTIONS & ANSWERS</div>
        ml-auto
      <div className="flex flex-row justify-between">
        HAVE A QUESTION? SEARCH FOR ANSWERS...
        <img src={magnifiyingGlass} alt="magnifiyingGlass" className="w-12"/>
      </div>
    </>
  )
}

export default QnA;