import React from 'react';
import { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import star_filled from '../../star_filled.svg'

const StarsInput = ({selectedRating, cb}) => {
  const [rating, setRating] = useState(0);

  const radioButtonCSS = {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute !important',
    width: '1px'
  }

  // switch that displays the suggested Text
  // 1 star - “Poor”
  // 2 stars - “Fair”
  // 3 stars - “Average”
  // 4 stars - “Good”
  // 5 stars - “Great”
  const selectionHint = () => {
  }

  // onChangeValue changes the
    // this needs to invoke the callback
  const onChangeValue = () => {
    // invoke a callback to change the properties contained in parent component
    setRating(event.target.value);
  }

  // these can be mapped out so that thye
  return (
    <div onChange={onChangeValue} className="flex flex-column">
      <div className="flex w-5/12 overflow-auto	text-sm">
        <label>
          How would you rate this product?
        </label>
      </div>
      <div className="w-6/12 flex flex-column justify-evenly">
        {Array.from({ length: 5 }, (v, i) => (
          <label htmlFor={'starlabel' + i}>
            <input
              type="radio"
              name="rating"
              value={i}
              key={'starinput' + i}
            />
            <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/>
          </label>
        ))}
        {/* <label htmlFor="star1" key="1">
        <input
          type="radio"
          name="rating"
          value="1"
          key="1"
        />
          <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/>
        </label>
        <label>
          <input
          type="radio"
          name="rating"
          value="2"
          keys="2"
          />
          <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="3"
          />
          <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="4"
          />
          <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/>
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="5"
          />
          <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/>
        </label> */}
      </div>
    </div>
  )
}

export default StarsInput;
