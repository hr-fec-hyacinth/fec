import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import Modal from './Modal.jsx'
import AForm from './AForm.jsx'

const OneQ = ({ questionData, product }) => {

  const [helpfulness, setHelpfulness] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [reported, setReported] = useState(false);

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

  const handleReportClick = () => {
    setReported(true);
    api.putReportQuestion(questionData.question_id)
    .then(response => {
      if (response.status !== 204) {
        console.warn('Response code is not 204')
        console.log(response)
      }
    })
    .catch(err => console.log('Error in OneQ putReportQuestion api call:', err));
  }

  if(reported) {
    var reportComp = <button  className='text-netural-500 text-xs ml-3'>Reported</button>
  } else {
    var reportComp = <button className='underline text-netural-500 text-xs ml-3' onClick={handleReportClick}>Report</button>
  }

  var result;
  if (questionData)
    result = (
      <>
        <div className="flex my-3 mr-2 sm:flex-row flex-col">
          <div className='flex'>
            <div className='font-bold'>Q:</div>
            <div className='font-bold ml-3'>{questionData.question_body}</div>
          </div>
          <div className='flex sm:self-end self-center sm:ml-auto mt-1'>
            <div className=' text-netural-500 text-xs font-semibold'>Helpful?</div>
            <button className='text-netural-500 text-xs font-semibold underline ml-3' onClick={handleYesClick}>Yes</button>
            <div className='text-netural-500 text-xs ml-1'>({helpfulness})</div>
            <div className='text-netural-500 text-xs ml-3'>|</div>
            <button className='text-netural-500 text-xs underline ml-3' onClick={handleAddAClick}>Add Answer</button>
            <div className='text-netural-500 text-xs ml-3'>|</div>
            {reportComp}
          </div>
        </div>
        {modalOpen &&
          <Modal setModalOpen={setModalOpen}>
            <div className='flex flex-col items-center'>
              <div className='mx-2 mb-3 font-thin text-xl text-netural-500'>{product.name}: {questionData.question_body}</div>
            </div>
            <AForm setModalOpen={setModalOpen} question={questionData}/>
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