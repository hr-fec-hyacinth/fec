import React, { useState, useEffect } from 'react';

const OneA = ({ answer }) => {
  const date = new Date(answer.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [helpfulness, setHelpfulness] = useState(0);
  const [reported, setReported] = useState(false);

  useEffect(() => {
    setHelpfulness(answer.helpfulness)
  }, [answer])

  const handleYesClick = () => {
    setHelpfulness(answer.helpfulness+1)
  }

  const handleReportClick = () => {
    setReported(true);
  }

  if(reported) {
    var reportComp = <div>Reported</div>
  } else {
    var reportComp = <div onClick={handleReportClick}>Report</div>
  }

  return (
    <>
      <div>A: {answer.body}</div>
      <div>by: {answer.answerer_name}, {formattedDate} | Helpful? | Yes ({helpfulness}) | Report</div>
      <div onClick={handleYesClick}>Yes</div>
      {reportComp}
    </>
  )
}

export default OneA;