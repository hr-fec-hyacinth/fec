import React, { useState, useEffect } from 'react';
import OneA from './OneA.jsx'

const AList = ({ answers }) => {

  const [display, setDisplay] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [more, setMore] = useState(true);

  useEffect(() => { setAnswersDefault() }, [answers])

  const setAnswersDefault = () => {
    if (answers.length > 1) {
      setDisplay([answers[0], answers[1]]);
    } else if (answers.length === 1) {
      setDisplay([answers[0]]);
    }

    if(answers.length <= 2) {
      setMore(false)
    }
  }

  const handleMoreClick = () => {
    setDisplay(answers);
    setCollapse(true);
    setMore(false);
  }

  const handleCollapseClick = () => {
    setAnswersDefault();
    setCollapse(false);
    setMore(true);
  }

  return (
    <div className='overflow-y-auto max-h-halfScreen'>
      {display.map((answer, index) => <OneA answer={answer} key={index}/>)}
      {more && <div className='ml-7 font-bold text-xs my-4' onClick={handleMoreClick}>LOAD MORE ANSWERS</div>}
      {collapse && <div className='ml-7 font-bold text-xs my-4' onClick={handleCollapseClick}>COLLAPSE</div>}
    </div>
  )
}

export default AList;