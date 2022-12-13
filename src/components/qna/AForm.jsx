import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';


const AForm = ({ setModalOpen, question }) => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [photosSrcList, setPhotosSrcList] = useState([]);
  const [nickWarn, setNickWarn] = useState(<div className='my-2.5'></div>);
  const [mailWarn, setMailWarn] = useState(<div className='my-2.5'></div>);
  const [answerWarn, setAnswerWarn] = useState(<div className='my-2.5'></div>);

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!answer) {
      setAnswerWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>All fields are required! Please fill out all fields.</div>)
    } else if (!nickname) {
      setNickWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Nickname is too short! Please enter a longer nickname.</div>)
    } else if (email.length > 60) {
      setMailWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Email is too long! Please enter a shorter email.</div>)
    } else if (answer.length > 1000) {
      setAnswerWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Answer is too long! Please enter a shorter answer.</div>)
    } else if (nickname.length > 60) {
      setNickWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Nickname is too long! Please enter a shorter nickname.</div>);
    } else if (!mailformat.test(email)) {
      setMailWarn(<div className='text-xs font-normal text-rose-500 mb-1 ml-1'>Email not in correct format! Please enter vaild email.</div>);
    } else {
      api.postAnswer(question.question_id, {body:answer, name:nickname, email:email, photos: photosSrcList})
        .then(response => {
          setModalOpen(false);
        }).catch(err => {
          console.log('Error posting answer', err)
        })
    }
  };


  const handleNicknameClick = () => {
    setNickWarn(<div className='text-xs font-normal text-yellow-500 mb-1 ml-1'>For privacy reasons, do not use your full name or email address</div>);
  }

  const handleEmailClick = () => {
    setMailWarn(<div className='text-xs font-normal text-yellow-500 mb-1 ml-1'>For authentication reasons, you will not be emailed</div>)
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

  var uploadButton;
  if(photosSrcList.length >= 5) {
    uploadButton = <div className='my-3.5'></div>
  } else {
    uploadButton = <input type='file' name='image' onChange={handleFiles} multiple/>
  }

  const thumbnails = photosSrcList.map((src, i) => <img className='max-w-[5rem] p-[3px] border rounded border-slate-300 bg-white/30' src={src} key={i} />);

  return (
    <div className='font-thin'>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <textarea
          className='resize-none border border-gray rounded-lg p-2 m-1 bg-white/30 w-[40vw] h-[20vh] min-w-[20rem]'
          autoComplete='off'
          name="answer"
          value={answer}
          placeholder="Type your answer here"
          onChange={(event) => setAnswer(event.target.value)}
        />
        {answerWarn}
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
        {uploadButton}
        <div className='flex flex-row gap-3 m-3 self-center bg-white/30'>
          {thumbnails}
        </div>
        <input className='font-normal' type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default AForm;

