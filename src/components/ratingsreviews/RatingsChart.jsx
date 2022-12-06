import React from 'react';

const RatingsChart = ({metaRatings}) => {
  const totalRatings = Object.keys(metaRatings).reduce((prev, cur) =>
    { return prev + parseInt(metaRatings[cur])}
    , 0);

  // console.log('this is the total ratings', totalRatings);

  return (
    <div>
      {metaRatings && Object.keys(metaRatings).map((el, i) => {

        const fillStyle = {
          width: `${(metaRatings[el]/totalRatings) * 100}%`,
          height: '100%',
          verticalAlign: 'middle',
          backgroundColor: '#ffbf00f0'
        }

        return (
          <div key={el + i} className='flex py-1 hover:bg-sky-300'>
          <div className='w-3/12 text-xs'>{el + ' Star:'}</div>
          <div className='w-8/12' style={{
            border: 'solid black 1px',
            backgroundColor: 'light gray'
          }}>
            <div style={fillStyle}></div>
          </div>
          </div>
        )
      })
      }
    </div>
  )
};


export default RatingsChart;