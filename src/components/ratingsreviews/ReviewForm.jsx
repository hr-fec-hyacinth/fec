import React from 'react';
import { useState, useEffect } from 'react';
import StarsInput from './StarsInput.jsx';
import CharInputTable from './CharacteristicInputTable.jsx';
import { IoIosCloseCircle } from 'react-icons/io';

const ReviewForm = ({product, meta, onFormSubmit}) => {
  // store form fields as controlled states
  const [fields, setFields] = useState({
    "product_id": 37313,
    "rating": 4,
    "summary": "this is an amazing product",
    "recommend": false,
    "body": "I need to fill 50 words broski, plz let me fill a review :( ahhhhhhhh",
    "name": "calvin testing",
    "email": "calvin@gmail.com",
    "photos": [
          "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
    ],
    "characteristics": {
      "125036": 1,
      "125037": 1,
      "125038": 1,
      "125039": 1
    }
  });

  const [characteristics, setCharacteristics] = useState({});

  // CSS Styling for table specifically to stretch the whole row
    // Affect Radio Buttons
  const tableStyling = {};

  // CSS styling for
  const starRating = {}

  const handleOnChange = (e, name) => {
    e.preventDefault();
  }

  // first div ratings needs to be replaced with selectable stars component
  // map through the keys and turn it into a row
  return (
      <div className="flex z-30 flex-col h-full items-center space-x-2 justify-center  ">
        <p>Leave A Review Below:</p>
        <div className="flex-initial w-5/12 bg-slate-100 py-3 my-4 rounded-xl
                        shadow-md relative">
          <IoIosCloseCircle className="text-emerald-700 text-2xl hover:text-emerald-600
                                       absolute top-3 right-3"
                            onClick={onFormSubmit}
                                       />
          <form className="space-y-6 my-4 mx-4">
            <div>
              <StarsInput />
            </div>

            <div className="flex flex-wrap">
              <div className="flex w-5/12 overflow-auto	text-sm">
                <label>
                  Would you recommend this product?
                </label>
              </div>
              <div className="flex w-6/12 justify-evenly">
                <label className="px-2">
                  <span>Yes</span>
                  <input type="radio"
                          name="wouldRecommend"
                          value="true"
                  ></input>
                </label>
                <label className="px-2">
                  <span>No</span>
                  <input type="radio"
                          name="wouldRecommend"
                          value="false"
                  ></input>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap w-full">
              <span>Name</span>
              <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300
                  rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </div>

            <div className="flex flex-wrap w-full">
              <span>Name</span>
              <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300
                  rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </div>

            {/* <div>
               <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option default value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div> */}

            <div className="flex flex-wrap">
              <div className="w-full mw-full mx-auto font-extralight">
                {meta.characteristics && <CharInputTable metaChars={meta.characteristics}  />}
              </div>
            </div>

            <div className="flex flex-wrap w-full">
              <span>Summary</span>
              <textarea class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300
                  rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </div>

            <div>
              Photo Upload
              <label class="block">
                <span class="sr-only">Upload your Photos</span>
                <input type="file" class="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-emerald-50 file:text-emerald-700
                  hover:file:bg-emerald-100
                "/>
              </label>
            </div>


            <button name="submitForm" onClick={onFormSubmit}
              className="block w-full text-sm text-slate-500 bg-emerald-50 rounded-2xl p-3
              hover:bg-emerald-700 hover:text-slate-100">
              Submit
            </button>


          </form>

        </div>
      </div>
  )
}

export default ReviewForm;