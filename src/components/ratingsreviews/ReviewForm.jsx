import React from 'react';
import { useState, useEffect } from 'react';
import StarsInput from './StarsInput.jsx';
import CharInputTable from './CharacteristicInputTable.jsx';
import { IoIosCloseCircle } from 'react-icons/io';
import PhotoUpload from '../shared/PhotoUpload.jsx';

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

  console.log('somethign in review form is failing');

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

  // //function to calculate remaining characters and display the characters
  // const bodyChars = (reviewBodysLengthAsNumber) => {
  //   // return two different divs depending whether the number is greater or less than 50
  // }

  // // this is a function that runs on every update and handles validation of the form
  // const handleValidation = (inputType, value) => {
  // }

  // // this is going to be the callback
  // const postToDB = () => {
  // }

  // handles onChange Functionality for everything before
  const handleOnChange = (e, name) => {
    console.log(e.target);
    // e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    })
    // console.log(fields)
    // console.log(typeof fields.recommend)
  }

  // add validation handler
  const handleCharsOnChange = (e, name) => {
    console.log('inside handleCharsOnChange, ',e.target.name, e.target.value)
      setFields({
        ...fields,
        characteristics: {
          ...fields.characteristics,
          [e.target.name]: e.target.value
        }
      })
  }


  return (
      <div className="flex z-30 flex-col h-full items-center space-x-2 justify-center  ">
        <p>Leave A Review Below:</p>
        <div className="flex-initial w-6/12 bg-slate-100 py-3 my-4 rounded-xl
                        shadow-md relative">
          <IoIosCloseCircle className="text-emerald-700 text-2xl hover:text-emerald-600
                                       absolute top-3 right-3"
                            onClick={onFormSubmit}/>

          <form className="space-y-3 my-5 mx-4">
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
              <span className="text-xs">For authentication reasons, you will not be emailed</span>
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

            {/* <div>
              Photo Upload
              <label className="block">
                <span className="sr-only">Upload your Photos</span>
                <input type="file" className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-emerald-50 file:text-emerald-700
                  hover:file:bg-emerald-100
                "/>
              </label>
            </div> */}

            <div><PhotoUpload /></div>

            <div>
              <button name="submitForm" onClick={onFormSubmit}
                className="my-3 bg-emerald-50 hover:file:bg-emerald-100
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