import React from 'react';

const RatingsChart = ({metaRatings}) => {
  const totalRatings = Object.keys(metaRatings).reduce((prev, cur) =>
    { console.log('this is prev', prev);
      console.log('this is cur',cur);
      console.log('this is number of',metaRatings[cur]);
      return prev + parseInt(metaRatings[cur])}
    , 0);

  console.log('this is the total ratings', totalRatings);

  return (
    <>
      {metaRatings && Object.keys(metaRatings).map((el, i) => {
        console.log('what is the metaRatings', metaRatings[el])
        const styles = {
          width: `${(metaRatings[el]/totalRatings) * 100}%`,
          height: '100%',
          backgroundColor: '#f6fa12'
        }
        return (
          <div key={el + i} className='flex py-1'>
          <div className='w-3/12'>{el + ' Star:'}</div>
          <div className='w-8/12' style={{
            border: 'solid black 1px',
            backgroundColor: 'light gray'
          }}>
            <div style={styles}></div>
          </div>
          </div>
        )
      })
      }
    </>
  )
};


export default RatingsChart;