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
  const starCSS = 'text-orange-400 hover:hover:text-blue-600 checked:bg-black';
  if (rating - currentIndex >= 1) {
    return (<BsStarFill key={'starsDisplay'+ currentIndex} className={starCSS} />)
    } else if (rating - currentIndex > 0 && rating - currentIndex < 1) {
    return (<BsStarHalf key={'starsDisplay'+ currentIndex} className={starCSS} />)
    } else {
    return (<BsStar key={'starsDisplay'+ currentIndex} className={starCSS} />)
  }
}

const StarsInput = ({selectedRating, cb}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(false);
  const [starsToRender, setStarsToRender] = useState(0);

  useEffect(() => {
    if (!hover) {
      setStarsToRender(selectedRating);
    }
  }, [])

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
  // changes the highlight &
  // 1 star - “Poor”
  // 2 stars - “Fair”
  // 3 stars - “Average”
  // 4 stars - “Good”
  // 5 stars - “Great”
  const selectionHint = (selectedRating) => {
    switch(selectedRating){
      case null:
        return (<span></span>)
        break;
      case "1":
        return (<div>Poor</div>);
        break;
      case "2":
        return (<span>Fair</span>);
        break;
      case "3":
        return (<span>Average</span>);
        break;
      case "4":
        return (<span>Good</span>);
        break;
      case "5":
        return (<span>Great</span>);
        break;
    }
  }

  // onChangeValue changes the
    // this needs to invoke the callback
  const onChangeValue = () => {
    // invoke a callback to change the properties contained in parent component
    setRating(event.target.value);
  }

  // these can be mapped out so that thye
  return (
    <div onChange={(e) => {cb(e, e.target.name)}} className="flex flex-column">
      <div className="flex w-5/12 overflow-auto	text-sm">
        <label>
          How would you rate this product?
        </label>
      </div>
      <div className="w-6/12 flex flex-column justify-evenly">
        {Array.from({ length: 5 }, (v, i) => {
          return (<label htmlFor={'starlabel' + i}
            >
            <input
              type="radio"
              name="rating"
              value={i + 1}
              key={'starinput' + i}
              onMouseOver={(e) => {
                setHover(true)
                setStarsToRender(event.target.value)
              }}
              onMouseOut={(e) => {
                setHover(false)
                setStarsToRender(selectedRating)
              }}
            />
            <SingleStar rating={starsToRender} currentIndex={i}/>
            {/* <BsStar className="text-orange-400 hover:hover:text-blue-600 checked:bg-black"/> */}
          </label>)
      })}
      </div>
      <div className="flex flex-wrap">{selectionHint(selectedRating)}</div>
    </div>
  )
}



export default StarsInput;

