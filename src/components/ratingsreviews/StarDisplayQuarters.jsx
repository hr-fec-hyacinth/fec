import React from 'react';
import { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import star_filled from '../shared/star_filled.svg'

const StarDisplayQuarters = ({number, cb}) => {
  const [rating, setRating] = useState(0);

  // 0 represents full star
  // 1 represents 1/4
  // 2 represents
  // let lastStarType = 0;

  const roundNearestQuarter = (number) => {
    // console.log(Math.round(number * 4)/4)
    // console.log((Math.round(number * 4) / 4).toFixed(2));
    return ((Math.round(number * 4) / 4).toFixed(2))
  }

  let roundedNum = roundNearestQuarter(number);
  // console.log(roundedNum);

  return (
    <div className="flex flex-column">
        {Array.from({ length: 5}, (v, i) => {
          if (roundedNum - i >= 1) {
            return (<BsStarFill key={'starsDisplay'+i} className="text-orange-400" />)
          } else if (roundedNum - i > 0 && roundedNum - i < 1) {
            return (<BsStarHalf key={'starsDisplay'+i} className="text-orange-400" />)
          } else {
            return (<BsStar key={'starsDisplay'+i} className="text-orange-400" />)
          }
        })
          // if(i <= number) {
          //   (\<BsStarFill className="text-orange-400"/>)
          // } else if (i > number) {
          //   (<BsStar className="text-orange-400" />)
          // }
      }
    </div>
  )
}

export default StarDisplayQuarters;
