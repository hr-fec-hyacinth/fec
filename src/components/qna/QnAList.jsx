import React, { useEffect, useState } from 'react';
import api from '../../../server/api.js';
import OneQnA from './OneQnA.jsx';
import Modal from './Modal.jsx';
import QForm from './QForm.jsx';
import { BsPlusLg } from 'react-icons/bs';

const QnAList = ({ product, search }) => {

  const [questions, setQuestions] = useState([]);
  const [sendWarn, setSendWarn] = useState(false);
  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [filterQuestions, setFilterQuestions] = useState([]);
  const [more, setMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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

  const filterFunc = q => q.question_body.toLowerCase().includes(search.toLowerCase());

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
    if (filterQuestions.length <= 2)
      setDisplayQuestions([...filterQuestions])
    else if (filterQuestions.length > 2)
      setDisplayQuestions([filterQuestions[0], filterQuestions[1]])
  }, [filterQuestions])

  useEffect(() => {
    if (filterQuestions.length > 2) {
      setMore(true)
    } else {
      setMore(false)
    }
  }, [filterQuestions])

  useEffect(() => {
    if (search.length < 3)
      setFilterQuestions(questions)
    else
      setFilterQuestions(questions.filter(filterFunc))
  },[questions, search])

  const handleMoreClick = () => {
    const i = displayQuestions.length;
    const dif = filterQuestions.length - displayQuestions.length;
    if(dif === 1) {
      setDisplayQuestions(displayQuestions.concat([filterQuestions[i]]));
      setMore(false);
    } else if (dif === 2) {
      setDisplayQuestions(displayQuestions.concat([filterQuestions[i], filterQuestions[i+1]]));
      setMore(false);
    } else if (dif > 2) {
      setDisplayQuestions(displayQuestions.concat([filterQuestions[i], filterQuestions[i+1]]));
    } else {
      console.warn('This should not be hit, you need to handle me.')
    }
  }

  const handleAddQClick = () => {
    setModalOpen(true);
  }

  return (
    <>
      {/* Give the following div a max height of screen - searchbar - buttons */}
      <div>
        {displayQuestions.map((q, index) => <OneQnA questionData={q} key={index}/>)}
      </div>
      <div className='flex'>
        {more && <div className='border border-black p-2.5 font-bold m-2.5' onClick={handleMoreClick}>MORE ANSWERED QUESTIONS</div>}
        <div className='flex items-center border border-black p-2.5 font-bold m-2.5'
          onClick={handleAddQClick}>
          <div>ADD A QUESTION</div>
          <BsPlusLg className='ml-1'/>
        </div>
      </div>
      {modalOpen &&
        <Modal setModalOpen={setModalOpen}>
          <QForm setModalOpen={setModalOpen}/>
        </Modal>
      }
    </>
  )
}

export default QnAList;