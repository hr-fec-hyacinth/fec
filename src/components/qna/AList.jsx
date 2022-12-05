import React, { useState, useEffect } from 'react';
import OneA from './OneA.jsx'

const AList = ({ answers }) => {

  const [display, setDisplay] = useState([])

  useEffect(() => {
    if (answers.length > 0) {
      setDisplay([answers[0], answers[1]])
    }
  }, [answers])


  return (
    <>
      {display.map(answer => <OneA answer={answer}/>)}
    </>
  )
}

export default AList;