import React, { useState } from 'react';
import api from '../../../server/api.js';


const AForm = ({ setModalOpen, question }) => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answer || !nickname || !email) {
      alert('All fields are required! Please fill out all fields.');
    } else if (email.length > 60) {
      alert('Email is too long! Please enter a shorter email.');
    } else if (answer.length > 1000) {
      alert('Answer is too long! Please enter a shorter answer.');
    } else if (nickname.length > 60) {
      alert('Nickname is too long! Please enter a shorter nickname.');
    } else if (!mailformat.test(email)) {
      alert('Email not in correct format! Please enter vaild email.');
    } else {
      //alert(`Form submitted successfully!\nAnswer: ${answer}\nNickname: ${nickname}\nEmail: ${email}`);
      // send to api
      api.postAnswer(question.question_id, {body:answer, name:nickname, email:email})
        .then(response => {
          setModalOpen(false);
          //TODO: Pop-up notifying the user the question has been received
        }).catch(err => {
          console.log('Error posting answer', err)
          //TODO: Pop-up "Sorry unable to post your answer at this time. Please try again later"
        })
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <textarea
        className='resize-none border border-gray rounded-lg p-2 m-1'
        autoComplete='off'
        name="answer"
        value={answer}
        placeholder="Type your answer here"
        rows="5"
        cols="80"
        onChange={(event) => setAnswer(event.target.value)}
      />
      <label className='m-1'>
        Nickname:
        <input
          className='border border-gray rounded p-1 ml-1'
          autoComplete='off'
          type="text"
          name="nickname"
          value={nickname}
          placeholder="jackson11!"
          onChange={(event) => setNickname(event.target.value)}
        />
      </label>
      <label className='m-1'>
        Email:
        <input
          className='border border-gray rounded p-1 ml-1'
          autoComplete='off'
          type="text"
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AForm;
