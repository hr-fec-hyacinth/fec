import React from 'react';
import { useState, useEffect } from 'react';
import StarsInput from './StarsInput.jsx';
import CharInputTable from './CharacteristicInputTable.jsx';
import { IoIosCloseCircle } from 'react-icons/io';
import PhotoUpload from '../shared/PhotoUpload.jsx';
import axios from 'axios';
import { AUTHKEY } from '../../../server/config.js';

const ReviewForm = ({product, meta, onFormSubmit}) => {
  // store form fields as controlled states
  const [fields, setFields] = useState({
    "product_id": 37313,
    "rating": 0,
    "summary": "",
    "recommend": null,
    "body": "",
    "name": "",
    "email": "",
    "photos": [
          "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
    ],
    "characteristics": {
    }
  });

  const [characteristics, setCharacteristics] = useState({});
  const [hasPosted, setHasPosted] = useState(false)

  // CSS Styling <---------------------------------------------------------------------------------------------------->
  // CSS Styling for table specifically to stretch the whole row
    // Affect Radio Buttons
  const tableStyling = {};
  // CSS styling for
  const starRating = {}
  const textCSS = 'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' +
    'focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' +
    'disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200' +
    'disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500';

  //------------------------------------------------------------------------------------------->

  // // this is a function that runs on every update and handles validation of the form
  // const handleValidation = (inputType, value) => {
  // }

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
      // console.log(fields);
      // console.log(fields.characteristics);

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
    // console.log('this is the post body', fields);
    // console.log('this is the remadePostBody,', postBody);
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'+'reviews', postBody, {headers: {Authorization: AUTHKEY}})
      .then(result => {
        console.log(result)})
      .catch(err => {
        console.log(err)
      })
  }


  return (
      <div className="fixed flex z-30 flex-col items-center space-x-2 justify-center bg-black/30 w-full h-full left-0 top-0">
        <p>Leave A Review Below:</p>
        <div className="flex-initial w-6/12 bg-slate-100 py-3 my-4 rounded-xl
                        shadow-md relative overflow-auto max-h-full">
          <IoIosCloseCircle className="text-emerald-700 text-2xl hover:text-emerald-600
                                       absolute top-3 right-3"
                            onClick={onFormSubmit}/>

          <form className="space-y-2 my-5 mx-4 overflow-auto">
            <div>
              <StarsInput selectedRating={fields.rating} cb={handleOnChange}/>
            </div>

            <div className="flex flex-wrap">
              <div className="flex w-5/12 overflow-auto	text-sm">
                <label>
                  Would you recommend this product?
                </label>
              </div>
              <div className="flex w-6/12 justify-evenly align-middle">
                <label className="px-2">
                  <span>Yes</span>
                  <input type="radio"
                          name="recommend"
                          value={Boolean(true)}
                          onChange={handleOnChange}
                  ></input>
                </label>
                <label className="px-2">
                  <span>No</span>
                  <input type="radio"
                          name="recommend"
                          value={Boolean(false)}
                          onChange={handleOnChange}
                  ></input>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap w-full">
              <span>What is your nickname?</span>
              <input type="text"
                value={fields.name}
                name="name"
                placeholder="Example: jackson11!"
                onChange={handleOnChange}
                className={textCSS} />
            </div>

            <div className="flex flex-wrap w-full">
              <span>Your Email</span>
              <input type="text"
                value={fields.email}
                name="email"
                onChange={handleOnChange}
                placeholder="Example: jackson11@email.com"
                className={textCSS}/>
              <span className="text-xs">
                For authentication reasons, you will not be emailed</span>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full mw-full mx-auto font-light">
                {meta.characteristics && <CharInputTable metaChars={meta.characteristics} cb={handleCharsOnChange}/>}
              </div>
            </div>

            <div className="flex flex-wrap w-full">
              <span>Review Summary</span>
              <textarea
                value={fields.summary}
                name="summary"
                onChange={handleOnChange}
                className={textCSS}
                placeholder="Example: Best purchase ever!"
                maxLength="60"
                col="60"
                rows="1"
              />
            </div>

            <div className="flex flex-wrap w-full">
              <span>Review</span>
              <textarea
                value={fields.body}
                name="body"
                onChange={handleOnChange}
                className={textCSS}
                placeholder="Example: Best purchase ever!"
                maxLength={1000}
                minLength={50}
              />
              <span className="text-xs">{50 - fields.body.length} needed</span>
            </div>

            <div><PhotoUpload /></div>

            <div>
              <button name="submitForm" onClick={submitForm}
                className="my-3 bg-emerald-50
                hover:file:bg-emerald-100
                block w-full text-sm text-slate-500">
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>
  )
}

export default ReviewForm;