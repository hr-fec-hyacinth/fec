import React, { useState } from 'react';
import api from '../../../server/api.js';

const QForm = ({ setModalOpen, product }) => {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [nickWarn, setNickWarn] = useState(<div className='my-2.5'></div>);
  const [mailWarn, setMailWarn] = useState(<div className='my-2.5'></div>);
  const [questionWarn, setQuestionWarn] = useState(<div className='my-2.5'></div>);

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!question) {
      setQuestionWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>All fields are required! Please fill out all fields.</div>)
    } else if (!nickname) {
      setNickWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Nickname is too short! Please enter a longer nickname.</div>)
    } else if (email.length > 60) {
      setMailWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Email is too long! Please enter a shorter email.</div>)
    } else if (question.length > 1000) {
      setQuestionWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Answer is too long! Please enter a shorter answer.</div>)
    } else if (nickname.length > 60) {
      setNickWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Nickname is too long! Please enter a shorter nickname.</div>);
    } else if (!mailformat.test(email)) {
      setMailWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Email not in correct format! Please enter vaild email.</div>);
    } else {
      api.postQuestion(product.id, {body:question, name:nickname, email:email})
        .then(response => {
          setModalOpen(false);
        }).catch(err => {
          console.log('Error posting question', err)
        })
    }
  };

  const handleNicknameClick = () => {
    setNickWarn(<div className='text-xs font-normal text-yellow-500 mb-1 ml-1'>For privacy reasons, do not use your full name or email address</div>);
  }

  const handleEmailClick = () => {
    setMailWarn(<div className='text-xs font-normal text-yellow-500 mb-1 ml-1'>For authentication reasons, you will not be emailed</div>)
  }

  return (
    <div className='font-thin'>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <textarea
          className='resize-none border border-gray rounded-lg p-2 m-1 bg-white/30 w-[40vw] h-[20vh] min-w-[20rem]'
          autoComplete='off'
          name="question"
          value={question}
          placeholder="Type your question here"
          onChange={(event) => setQuestion(event.target.value)}
        />
        {questionWarn}
        <label className='m-1'>
          Nickname:
          <input
            className='border border-gray rounded p-1 ml-1 bg-white/30'
            autoComplete='off'
            type="text"
            name="nickname"
            value={nickname}
            placeholder="jackson11!"
            onChange={(event) => setNickname(event.target.value)}
            onClick={handleNicknameClick}
          />
        </label>
        {nickWarn}
        <label className='m-1'>
          Email:
          <input
            className='border border-gray rounded p-1 ml-1 bg-white/30'
            autoComplete='off'
            type="text"
            name="email"
            value={email}
            placeholder="example@email.com"
            onChange={(event) => setEmail(event.target.value)}
            onClick={handleEmailClick}
          />
        </label>
        {mailWarn}
        <input className='font-normal' type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default QForm;

