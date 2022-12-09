import React, { useEffect, useState } from 'react';
import OneQnA from './OneQnA.jsx';
import Modal from './Modal.jsx';
import QForm from './QForm.jsx';
import { BsPlusLg } from 'react-icons/bs';

const QnAList = ({ product, search, questions }) => {

  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [filterQuestions, setFilterQuestions] = useState([]);
  const [more, setMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const filterFunc = q => q.question_body.toLowerCase().includes(search.toLowerCase());

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

  const handleCollapseClick = () => {
    setDisplayQuestions([filterQuestions[0], filterQuestions[1]])
    setMore(true);
  }

  const handleAddQClick = () => {
    setModalOpen(true);
  }

  return (
    <>
      <div className='grow overflow-auto my-2'>
        {displayQuestions.map((q, index) => <OneQnA questionData={q} key={index} product={product}/>)}
      </div>
      <div className='flex'>
        {more && <button className='border border-black p-2.5 font-bold m-2.5' onClick={handleMoreClick}>MORE ANSWERED QUESTIONS</button>}
        {displayQuestions.length > 2 && <button className='border border-black p-2.5 font-bold m-2.5' onClick={handleCollapseClick}>COLLAPSE</button>}
        <button className='flex items-center border border-black p-2.5 font-bold m-2.5'
          onClick={handleAddQClick}>
          <div>ADD A QUESTION</div>
          <BsPlusLg className='ml-1'/>
        </button>
      </div>
      {modalOpen &&
        <Modal setModalOpen={setModalOpen}>
          <div className='flex flex-col items-center'>
            <div className='font-thin text-xl text-netural-500'>Ask Your Question</div>
            <div className='mb-3 font-thin text-sm text-netural-500'>About the {product.name}</div>
          </div>
          <QForm setModalOpen={setModalOpen} product={product}/>
        </Modal>
      }
    </>
  )
}

export default QnAList;