import React from 'react';

const OneA = ({ answer }) => {
  const dateString = answer.date;
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <>
      <div>A: {answer.body}</div>
      <div>by: {answer.answerer_name}, {formattedDate} | Helpful? | Yes ({answer.helpfulness}) | Report</div>
    </>
  )
}

export default OneA;