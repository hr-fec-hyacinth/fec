import React, { useEffect, useState } from 'react';
import api from '../../../server/api.js';
import OneQnA from './OneQnA.jsx'

const QnAList = ({ product }) => {

  const [questions, setQuestions] = useState([]);
  const [sendWarn, setSendWarn] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState([]);

  const qHelpfulness = (a, b) => {
    if (a.question_helpfulness > b.question_helpfulness)
      return -1;
    if (a.question_helpfulness < b.question_helpfulness)
      return 1;
    return 0;
  }

  const aHelpfulness = (a, b) => {
    if (a.helpfulness > b.helpfulness)
      return -1;
    if (a.helpfulness < b.helpfulness)
      return 1;
    return 0;
  }

  const sortAnswers = (questions) => {
    return questions.map(q => {
      q.answers = Object.values(q.answers);
      q.answers.sort(aHelpfulness);
      return q;
    })
  }

  useEffect(() => {
    if (product.id)
      api.getQuestions(product.id)
        .then(response => response.data.results.sort(qHelpfulness))
        .then(sortedResponse => sortAnswers(sortedResponse))
        .then(sortedResponse => setQuestions(sortedResponse))
        .then()
        .catch(err => console.log('Error in QnAList getQuestions api call:', err));
    else if (sendWarn)
      console.warn("Product ID not defined, questions not requested");
    else
      setSendWarn(true);
  }, [product]);

  useEffect(() => {
    if(questions.length >= 5)
      console.warn('May need another page of questions for product ', product)
  }, [questions]);

  //when questions change add first two questions to display questions
  useEffect(() => {
    setDisplayQuestions([questions[0], questions[1]])
  }, [questions])

  //TODO: when load more questions is pressed two more questions should be added to display questions

  return (
    <>
    {/* return question comp */}
      {displayQuestions.map(q => <OneQnA questionData={q}/>)}
    </>
  )
}

export default QnAList;