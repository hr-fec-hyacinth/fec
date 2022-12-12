import React from 'react';
import { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import star_filled from '../../star_filled.svg'
import StarDisplayQuarters from './StarDisplayQuarters.jsx';

// Input will be passed into the
// state - Hover that's a boolean
// state - hoverOnValue - this is a number for 0 - 5=>
// changing this will rerender the

const SingleStar = ({rating, currentIndex}) => {
  const starCSS = 'text-orange-400 text-3xl hover:hover:text-blue-600 checked:bg-black';

  if (rating - currentIndex >= 1) {
    return (<div className=""> <BsStarFill key={'starsDisplay'+ currentIndex} className={starCSS} alt='fullStar' data-icon="aStarIcon"/> </div>)
    } else {
    return (<BsStar key={'starsDisplay'+ currentIndex} className={starCSS} area-labelledby='emptyStar' />)
  }
}

const StarsInput = ({selectedRating, cb}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(false);
  const [starsToRender, setStarsToRender] = useState(0);

  const radioButtonCSS = {
    display: 'none',
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute !important',
    width: '1px'
  }

  // switch that displays the suggested Text
  // changes the highlight &
  // 1 star - “Poor”
  // 2 stars - “Fair”
  // 3 stars - “Average”
  // 4 stars - “Good”
  // 5 stars - “Great”
  const selectionHint = (selectedRating) => {
    switch(selectedRating){
      case null:
        return (<span></span>);
      case "1":
        return (<div>Poor</div>);
      case "2":
        return (<span>Fair</span>);
      case "3":
        return (<span>Average</span>);
      case "4":
        return (<span>Good</span>);
      case "5":
        return (<span>Great</span>);
    }
  }

  const onChangeValue = () => {
    setRating(event.target.value);
  }

  return (
    <div onChange={(e) => {cb(e, Number(e.target.name))}} className="flex flex-column">
      <div className="flex w-5/12 overflow-auto	text-sm">
          How would you rate this product?
      </div>
      <div className="w-6/12 flex flex-column justify-evenly">
        {Array.from({ length: 5 }, (v, i) => {
          return (<label htmlFor={'starlabel' + (i+1)}
            onMouseOver={(e) => {
              setHover(true)
              setStarsToRender(i+1)
            }}
            onMouseOut={(e) => {
              setHover(false)
              setStarsToRender(selectedRating)
            }}
            key={'starInputlabel'+i}
            data-testid={'stars'+i} >
            <input
              type="radio"
              name="rating"
              value={i + 1}
              id={'starlabel'+ (i+1)}
              key={'starRadio' + i}
              style={radioButtonCSS} />
            <SingleStar rating={starsToRender} currentIndex={i}/>
          </label>)
      })}
      </div>
      <div className="flex flex-wrap">{selectionHint(selectedRating)}</div>
    </div>
  )
}

export default StarsInput;

