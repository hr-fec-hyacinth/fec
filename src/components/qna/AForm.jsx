import React, { useState } from 'react';

const AForm = ({ setModalOpen }) => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

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
    } else {
      //alert(`Form submitted successfully!\nAnswer: ${answer}\nNickname: ${nickname}\nEmail: ${email}`);
      // send to api
      setModalOpen(false);
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
          type="email"
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

