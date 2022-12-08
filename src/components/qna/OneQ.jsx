import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import Modal from './Modal.jsx'
import AForm from './AForm.jsx'

const OneQ = ({ questionData }) => {

  const [helpfulness, setHelpfulness] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (questionData)
      setHelpfulness(questionData.question_helpfulness)
  }, [questionData])

  const handleYesClick = () => {
    setHelpfulness(questionData.question_helpfulness+1)
    api.putHelpfulQuestion(questionData.question_id)
      .then(response => {
        if (response.status !== 204) {
          console.warn('Response code is not 204')
          console.log(response)
        }
      })
      .catch(err => console.log('Error in OneQ putHelpfulQuestion api call:', err));
  }

  const handleAddAClick = () => {
    setModalOpen(true);
  }

  var result;
  if (questionData)
    result = (
      <>
        <div className="flex my-3 gap-x-3 items-center">
          <div className='font-bold'>Q:</div>
          <div className='font-bold'>{questionData.question_body}</div>
          <div className='self-end self-center ml-auto text-netural-500 text-xs font-semibold'>Helpful?</div>
          <div className='text-netural-500 text-xs font-semibold underline' onClick={handleYesClick}>Yes</div>
          <div className='text-netural-500 text-xs'>({helpfulness})</div>
          <div className='text-netural-500 text-xs'>|</div>
          <div className='text-netural-500 text-xs underline' onClick={handleAddAClick}>Add Answer</div>
        </div>
        {modalOpen &&
          <Modal setModalOpen={setModalOpen}>
            <AForm setModalOpen={setModalOpen}/>
          </Modal>
        }
      </>
    );
  else
    result = <div>Loading question</div>;

  return (
    <>
      {result}
    </>
  )
}

export default OneQ;