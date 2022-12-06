import React from 'react';

const RatingsChart = ({metaRatings}) => {
  const totalRatings = Object.keys(metaRatings).reduce((prev, cur) =>
    { console.log('this is prev', prev);
      console.log('this is cur',cur);
      console.log('this is number of ratings',metaRatings[cur]);
      return prev + parseInt(metaRatings[cur])}
    , 0);

  console.log('this is the total ratings', totalRatings);

  return (
    <>
      {metaRatings && Object.keys(metaRatings).map((el, i) => {
        let styles = {
          backgroundColor: 'gray',
          borderLeft: 'solid blue 80%'
        }
        return (
          <div key={el + i} className='flex py-1'>
          <div className='w-3/12'>{el + ' Stars:'}</div>
          <div className='w-8/12' style={{
            border: 'solid black',
            backgroundColor: 'gray'
          }}>
            <div style={{
              maxWidth: '80%',
              height: '100%',
              backgroundColor: 'blue'
            }}></div>
          </div>
          </div>
        )
      })
      }
    </>
  )
};


export default RatingsChart;