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
    <div className='flex flex-col max-h-halfScreen'>
      <div className='grow overflow-auto'>
        {display.map((answer, index) => <OneA answer={answer} key={index}/>)}
      </div>
      {more && <button className='ml-7 font-bold text-xs my-4 self-start' onClick={handleMoreClick}>LOAD MORE ANSWERS</button>}
      {collapse && <div className='ml-7 font-bold text-xs my-4 self-start' onClick={handleCollapseClick}>COLLAPSE</div>}
    </div>
  )
}

export default AList;