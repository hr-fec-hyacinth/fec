import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';


const AForm = ({ setModalOpen, question }) => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [nickClick, setNickClick] = useState(false);
  const [mailClick, setMailClick] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photosSrcList, setPhotosSrcList] = useState([]);

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
      api.postAnswer(question.question_id, {body:answer, name:nickname, email:email, photos: photosSrcList})
        .then(response => {
          setModalOpen(false);
          //TODO: Pop-up notifying the user the question has been received
        }).catch(err => {
          console.log('Error posting answer', err)
          //TODO: Pop-up "Sorry unable to post your answer at this time. Please try again later"
        })
    }
  };


  const handleNicknameClick = () => {
    setNickClick(true);
  }

  const handleEmailClick = () => {
    setMailClick(true);
  }

  const handleFiles = e => {
    let files = Array.from(event.target.files)

    const promises = files.map(f => {
      var formData = new FormData();
      formData.append("file", f);
      formData.append("upload_preset", 'wjuxohsi');
      return api.postPhotos(formData)
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(response => response.data.url)
        setPhotosSrcList(photosSrcList.concat(data))
      }).catch(err => console.warn('Error uploading picture', err));
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

  var uploadButton;
  if(photosSrcList.length >= 5) {
    uploadButton = <div className='my-3.5'></div>
  } else {
    uploadButton = <input type='file' name='image' onChange={handleFiles} multiple/>
  }

  const thumbnails = photosSrcList.map((src, i) => <img className='max-w-[5rem] p-[3px] border rounded border-slate-300' src={src} key={i} />);

  return (
    <div className='font-thin'>
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
            onClick={handleNicknameClick}
          />
        </label>
        {nickWarn}
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
            onClick={handleEmailClick}
          />
        </label>
        {mailWarn}
        {uploadButton}
        <div className='flex flex-row gap-3 m-3 self-center'>
          {thumbnails}
        </div>
        <input className='font-normal' type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default AForm;

