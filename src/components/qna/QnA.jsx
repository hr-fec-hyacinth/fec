import React from 'react';
import QnAList from './QnAList.jsx'
import { HiMagnifyingGlass } from 'react-icons/hi2'


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
        <HiMagnifyingGlass size={18}/>
      </div>
      <QnAList product={product}/>
    </>
  )
}

export default QnA;