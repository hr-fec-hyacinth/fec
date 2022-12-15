import React from 'react';
import { useState, useEffect } from 'react';
import StarsInput from './StarsInput.jsx';
import CharInputTable from './CharacteristicInputTable.jsx';
import { IoIosCloseCircle } from 'react-icons/io';
import PhotoUpload from '../shared/PhotoUpload.jsx';
import Thumbnails from '../shared/Thumbnails.jsx'
import axios from 'axios';

require('dotenv').config();
let AUTHKEY = process.env.AUTHKEY;

const ReviewForm = ({product, meta, onFormSubmit, exitFormCB}) => {
  const [fields, setFields] = useState({
    'product_id': 37313,
    'rating': 0,
    'summary': '',
    'recommend': null,
    'body': '',
    'name': '',
    'email': '',
    'photos': [''],
    'characteristics': {}
  });

  const [characteristics, setCharacteristics] = useState({});
  const [hasPosted, setHasPosted] = useState(false)
  const [photosSrcList, setPhotosSrcList] = useState([]);

  // CSS Styling <---------------------------------------------------------------------------------------------------->
  // CSS Styling for table specifically to stretch the whole row
    // Affect Radio Buttons
  const textCSS = 'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' +
    'focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' +
    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200' +
    'disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500';

  //------------------------------------------------------------------------------------------->

  // handles onChange Functionality for everything before
  useEffect(() => {
    setFields({
      ...fields,
      ['product_id']: product.id
    })
  }, [product])

  const handleOnChange = (e, name) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
  }

  const handleCharsOnChange = (e, name) => {
      setFields({
        ...fields,
        characteristics: {
          ...fields.characteristics,
          [e.target.name]: Number(e.target.value)
        }
      })
  }

  // submit form
  const submitForm = (e) => {
    e.preventDefault();

    let postBody = {
      product_id: Number(fields.product_id),
      rating: Number(fields.rating),
      summary: fields.summary,
      recommend: Boolean(fields.recommend),
      body: fields.body,
      name: fields.name,
      email: fields.email,
      photos: [...fields.photos],
      characteristics: {
        ...fields.characteristics
      }
    }

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'+'reviews', postBody, {headers: {Authorization: AUTHKEY}})
      .then(result => {
        onFormSubmit(false);
      })
      .catch(err => {
        console.warn(err)
      })

  }

  return (
      <div className='fixed flex z-30 flex-col items-center space-x-2 justify-center bg-black/30 w-full h-full left-0 top-0 text-neutral-800'>
        <p>Leave A Review Below:</p>
        <div className='flex-initial w-10/12 sm:w-6/12 bg-slate-100 py-3 my-4 rounded-xl
                        shadow-md relative overflow-auto max-h-full'>
          <IoIosCloseCircle className='text-emerald-700 text-2xl hover:text-emerald-600 absolute top-3 right-3'
            data-testid="closeFormIcon"
            onClick={() => {onFormSubmit(false)}} />

          <form className='space-y-2 my-5 mx-4 overflow-auto' aria-label="form">
            <div>
              <StarsInput selectedRating={fields.rating} cb={handleOnChange}/>
            </div>

            <div className='flex flex-wrap'>
              <div className='flex w-5/12 overflow-auto	text-sm'>
                <label>
                  Would you recommend this product?
                </label>
              </div>
              <div className='flex w-6/12 justify-evenly align-middle'>
                <label className='px-2'>
                  <span>Yes</span>
                  <input type='radio'
                         role='radio'
                          name='recommend'
                          value={Boolean(true)}
                          onChange={handleOnChange}></input>
                </label>
                <label className='px-2'>
                  <span>No</span>
                  <input type='radio'
                         role='radio'
                        name='recommend'
                        value={Boolean(false)}
                        onChange={handleOnChange}></input>
                </label>
              </div>
            </div>

            <div className='flex flex-wrap w-full'>
              <span>What is your nickname?</span>
              <input type='text'
                value={fields.name}
                name='name'
                placeholder='Example: jackson11!'
                onChange={handleOnChange}
                className={textCSS} />
            </div>

            <div className='flex flex-wrap w-full'>
                Your Email
                <input type='text'
                  data-testid='email'
                  role='textbox'
                  value={fields.email}
                  name='email'
                  onChange={handleOnChange}
                  placeholder='Example: jackson11@email.com'
                  className={textCSS}/>
              <span className='text-xs'>
                For authentication reasons, you will not be emailed</span>
            </div>

            <div className='flex flex-wrap'>
              <div className='w-full mw-full mx-auto font-light'>
                {meta.characteristics &&
                <CharInputTable metaChars={meta.characteristics} cb={handleCharsOnChange}/>}
              </div>
            </div>

            <div className='flex flex-wrap w-full'>
              <span>Review Summary</span>
              <textarea
                value={fields.summary}
                name='summary'
                onChange={handleOnChange}
                className={textCSS}
                placeholder='Example: Best purchase ever!'
                maxLength='60'
                col='60'
                rows='1' />
            </div>

            <div className='flex flex-wrap w-full'>
              <span>Review</span>
              <textarea
                value={fields.body}
                name='body'
                onChange={handleOnChange}
                className={textCSS}
                placeholder='Example: Best purchase ever!'
                maxLength={1000}
                minLength={50} />
              <span className='text-xs'>{50 - fields.body.length} needed</span>
            </div>

            <PhotoUpload photosSrcList={photosSrcList} setPhotosSrcList={setPhotosSrcList}/>
            <Thumbnails photosSrcList={photosSrcList} expandOnClick={false}/>

            <div>
              <button id='submitReview' name='submitForm' onClick={submitForm}
                data-testid="formSubmit"
                className='my-3 bg-emerald-50
                hover:file:bg-emerald-100
                block w-full text-sm text-slate-500'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default ReviewForm;