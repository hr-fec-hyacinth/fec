import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';
const Styles = ({styles, styleIndex, changeStyleIndex}) => {

  return (
    <div className='flex flex-wrap'>
      {styles.map((style, index) => {
        return (<div key={style.style_id} onClick={e => {
          if (index !== styleIndex) {
            changeStyleIndex(index);
          }
        }}>
          {index === styleIndex && <div className='absolute ml-20 mt-1 bg-white rounded-full'><AiFillCheckCircle className='text-blue-400'/></div>}
          <img className='w-28 object-cover h-28 rounded-full' src={style.photos[0].thumbnail_url}></img></div>)
      })}
    </div>
  );
};

export default Styles;