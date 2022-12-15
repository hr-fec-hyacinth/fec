import React from 'react';
import { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
// import star_filled from '../shared/star_filled.svg'

const StarDisplayQuarters = ({number, cb}) => {
  const [rating, setRating] = useState(0);

  const roundNearestQuarter = (number) => {
    return ((Math.round(number * 4) / 4).toFixed(2))
  }

  let roundedNum = roundNearestQuarter(number);

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
      }
    </div>
  )
}

export default StarDisplayQuarters;
