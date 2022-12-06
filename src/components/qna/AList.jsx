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

  if(answers.length === 1 || answers.length === 2) {
    setMore(false)
  }


  return (
    <div className='overflow-y-auto max-h-halfScreen'>
      {display.map(answer => <OneA answer={answer}/>)}
      {more && <div onClick={handleMoreClick}>See more answers</div>}
      {collapse && <div onClick={handleCollapseClick}>Collapse</div>}
    </div>
  )
}

export default AList;