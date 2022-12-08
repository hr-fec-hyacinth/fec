import React, { useState } from 'react';

const AForm = () => {
  // Create state variables to store the values of the input fields
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  // This function will be called when the user submits the form
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Check if any of the input fields are empty
    if (!answer || !nickname || !email) {
      // If any of the fields are empty, show an error message
      alert('All fields are required! Please fill out all fields.');
    } else if (email.length > 60) {
      // If the email is too long, show a different error message
      alert('Email is too long! Please enter a shorter email.');
    } else if (answer.length > 1000) {
      // If the answer is too long, show a different error message
      alert('Answer is too long! Please enter a shorter answer.');
    } else if (nickname.length > 60) {
      // If the nickname is too long, show a different error message
      alert('Nickname is too long! Please enter a shorter nickname.');
    } else {
      // If all fields are filled out and the email and answer and nickname are not too long, submit the form
      alert(`Form submitted successfully!\nAnswer: ${answer}\nNickname: ${nickname}\nEmail: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      {/* <label> */}
        {/* Answer: */}
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
      {/* </label> */}
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

