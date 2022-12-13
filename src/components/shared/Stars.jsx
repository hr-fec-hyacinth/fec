import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ratings, cb}) => {
  // const [rating, setRating] = useState(0);

  // Calculates Nearest Quarter
  const roundNearestQuarter = (ratings) => {
    // console.log(Math.round(number * 4)/4)
    // console.log((Math.round(number * 4) / 4).toFixed(2));
    return ((Math.round(ratings * 4) / 4).toFixed(2))
  }

  let roundedNum = roundNearestQuarter(ratings);
  // console.log(roundedNum);

  return (
    <div className="flex flex-column">
        {Array.from({ length: 5}, (v, i) => {
          // replace with switch when implementing quarter stars
          if (roundedNum - i >= 1) {
            return (<BsStarFill key={'starsDisplay'+i} className="text-orange-400 inline" />)
          } else if (roundedNum - i > 0 && roundedNum - i < 1) {
            return (<BsStarHalf key={'starsDisplay'+i} className="text-orange-400 inline" />)
          } else {
            return (<BsStar key={'starsDisplay'+i} className="text-orange-400 inline" />)
          }
        })
      }
    </div>
  )
}

export default Stars;


