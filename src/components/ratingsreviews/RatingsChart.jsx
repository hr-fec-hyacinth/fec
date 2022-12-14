import React from 'react';
import { IoIosCheckbox } from 'react-icons/io';

const RatingsChart = ({metaRatings, ratingsCB, starFilter}) => {
  const totalRatings = Object.keys(metaRatings).reduce((prev, cur) =>
    { return prev + parseInt(metaRatings[cur])}
    , 0);

  return (
    <div>
      {metaRatings && Object.keys(metaRatings).map((el, i) => {

        const fillStyle = {
          width: `${(metaRatings[el]/totalRatings) * 100}%`,
          height: '100%',
          verticalAlign: 'middle',
          backgroundColor: '#4ba9f6ec'
        }

        return (
          <div key={el + i} className='flex py-1 hover:bg-sky-300'
            data-testid={el + 'starrating'}
            onClick={(e) => {
              e.preventDefault();
              ratingsCB(el);
            }} >
          <div className='w-3/12 text-xs'> {el + ' Star:'} </div>
          <div className='w-8/12 bg-white/30' style={{
            border: 'solid grey 1px',
            backgroundColor: 'light gray'
          }}>
            <div style={fillStyle}></div>
          </div>
          {starFilter[el] && <><IoIosCheckbox className="inline text-blue-400 max-h-full	"/></>}
          </div>
        )
      })
      }
    </div>
  )
};


export default RatingsChart;