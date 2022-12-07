import React from 'react';
import { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import star_filled from '../../star_filled.svg'


const Star = (marked) => {
  return (
    <>
    <span>{marked ? '\u2605' : '\u2606'}</span>
    <span> {'\u2605'}</span>
    <span> {'\u2606'} </span>
    </>
  )
}

const StarsInput = ({number, cb}) => {
  const [rating, setRating] = useState(0);

  const onChangeValue = (event) => {
    setRating(event.target.value);
    console.log(event.target.value);
  }

  const radioButtonCSS = {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute !important',
    width: '1px'
  }

  return (
    <div onChange={onChangeValue} className="flex flex-column">
      <div className="w-5/12">Leave A Review</div>
      <div className="w-6/12 flex flex-column justify-evenly">

        <label htmlFor="star1" key="1">
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
        </label>
      </div>
    </div>
  )
}

export default StarsInput;
