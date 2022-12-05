import React from 'react';
import magnifiyingGlass from './../../assets/loupe.png';
import QnAList from './QnAList.jsx'


const QnA = ({ product }) => {

  return (
    <>
      <div>QUESTIONS & ANSWERS</div>
      <div className="flex
                      flex-row
                      justify-between
                      items-center
                      border
                      border-black
                      p-2.5
                      font-bold
                      text-xs">
        HAVE A QUESTION? SEARCH FOR ANSWERS...
        <img src={magnifiyingGlass} alt="magnifiyingGlass" className="w-4 h-fit"/>
      </div>
      < QnAList product={product}/>
    </>
  )
}

export default QnA;