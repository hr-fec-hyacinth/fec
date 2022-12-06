import React, { useState, useEffect } from 'react';
import OneA from './OneA.jsx'

const AList = ({ answers }) => {

  const [display, setDisplay] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => { setAnswersDefault() }, [answers])

  const setAnswersDefault = () => {
    if (answers.length > 1) {
      setDisplay([answers[0], answers[1]]);
    } else if (answers.length === 1) {
      setDisplay([answers[0]]);
    }
  }

  const handleShowClick = () => {
    setDisplay(answers);
    setCollapse(true);
    setMore(false);
  }

  const handleCollapseClick = () => {
    setAnswersDefault();
    s
  }

  const element;
  if(display.length === 2 && answers.length > 2) { //there are two displaying and there are more
    <div onClick={handleShowClick}>See more answers</div>
  } else if (display.length === 1 || display) {} //there is one or two displaying and no more


  return (
    <div className='overflow-y-auto max-h-halfScreen'>
      {display.map(answer => <OneA answer={answer}/>)}
      {answers.length!==display.length && }
    </div>
  )
}

export default AList;