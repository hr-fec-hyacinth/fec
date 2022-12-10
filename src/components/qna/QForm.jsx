import React, { useState } from 'react';
import api from '../../../server/api.js';

const QForm = ({ setModalOpen, product }) => {
  const [question, setQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [nickClick, setNickClick] = useState(false);
  const [mailClick, setMailClick] = useState(false);

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!question || !nickname || !email) {
      alert('All fields are required! Please fill out all fields.');
    } else if (email.length > 60) {
      alert('Email is too long! Please enter a shorter email.');
    } else if (question.length > 1000) {
      alert('Question is too long! Please enter a shorter question.');
    } else if (nickname.length > 60) {
      alert('Nickname is too long! Please enter a shorter nickname.');
    } else if (!mailformat.test(email)) {
      alert('Email not in correct format! Please enter vaild email.');
    } else {
      //alert(`Form submitted successfully!\nQuestion: ${question}\nNickname: ${nickname}\nEmail: ${email}`);
      api.postQuestion(product.id, {body:question, name:nickname, email:email})
        .then(response => {
          setModalOpen(false);
          //TODO: Pop-up notifying the user the question has been received
        }).catch(err => {
          console.log('Error posting question', err)
          //TODO: Pop-up "Sorry unable to submit you question at this time. Please try again later"
        })
    }
  };

  const handleNicknameClick = () => {
    setNickClick(true);
  }

  const handleEmailClick = () => {
    setMailClick(true);
  }

  var nickWarn;
  if(!nickClick) {
    nickWarn = <div className='my-2.5'></div>
  } else {
    nickWarn = <div className='text-xs font-normal text-yellow-500 mb-1 ml-1'>For privacy reasons, do not use your full name or email address</div>
  }

  var mailWarn;
  if(!mailClick) {
    mailWarn = <div className='my-2.5'></div>
  } else {
    mailWarn = <div className='text-xs font-normal text-yellow-500 mb-1 ml-1'>For authentication reasons, you will not be emailed</div>
  }

  return (
    <div className='font-thin'>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <textarea
          className='resize-none border border-gray rounded-lg p-2 m-1 bg-white/30'
          autoComplete='off'
          name="question"
          value={question}
          placeholder="Type your question here"
          rows="5"
          cols="80"
          onChange={(event) => setQuestion(event.target.value)}
        />
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

