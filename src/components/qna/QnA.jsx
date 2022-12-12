import React, { useState, useEffect } from 'react';
import QnAList from './QnAList.jsx'
import api from '../../../server/api.js';
import { HiMagnifyingGlass } from 'react-icons/hi2'


const QnA = ({ product }) => {

  const [search, setSearch] = useState('')
  const [questions, setQuestions] = useState([]);

  const qHelpfulness = (a, b) => {
    if (a.question_helpfulness > b.question_helpfulness)
      return -1;
    if (a.question_helpfulness < b.question_helpfulness)
      return 1;
    return 0;
  }

  const aHelpfulness = (a, b) => {
    if ((a.answerer_name === 'seller' && b.answerer_name === 'seller') || (a.answerer_name !== 'seller' && b.answerer_name !== 'seller')) {
      if (a.helpfulness > b.helpfulness)
        return -1;
      if (a.helpfulness < b.helpfulness)
        return 1;
      return 0;
    }
    if(a.answerer_name === 'seller')
      return -1;
    if(b.answerer_name === 'seller')
      return 1;
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
        .then(response => {
          var sortResult = response.data.results.sort(qHelpfulness)
          sortResult = sortAnswers(sortResult)
          setQuestions(sortResult)
        })
        .catch(err => console.log('Error in QnAList getQuestions api call:', err));
  }, [product]);

  return (
    <div className='flex flex-col max-h-screen mx-1' onClick={e => api.postInteraction(e, 'Questions and Answers')}>
      <div className="my-4 text-neutral-400">QUESTIONS & ANSWERS</div>
      {questions.length > 0 &&
        <div className="flex
                        flex-row
                        justify-between
                        items-center
                        border
                        border-black
                        p-2.5
                        font-bold
                        text-s
                        bg-white/30">
          <form>
            <textarea
              className='resize-none focus:outline-none ml-2 bg-transparent  dark:placeholder:text-white'
              autoComplete='off'
              type="text"
              name="search"
              value={search}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              onChange={(event) => setSearch(event.target.value)}
              cols="80"
              rows="1"
              maxLength='72'
              />
          </form>
          <HiMagnifyingGlass size={18}/>
        </div>
      }
      <QnAList product={product} search={search} questions={questions}/>
    </div>
  )
}

export default QnA;