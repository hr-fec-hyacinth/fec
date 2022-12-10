import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

const safariStyle = {
  width: '25%',
  //height: '25%'
 };

const Styles = ({ styles, styleIndex, changeStyleIndex }) => {


  return (
    <div data-testid="custom" className='sm:m-0 mx-8 text-xl sm:mt-2 sm:text-base sm:ml-2'>
      <p><b>Style > </b>{styles[styleIndex] && styles[styleIndex].name}</p>
      <div className='flex flex-wrap mx-auto'>
        {styles.map((style, index) => {
          return (<div key={style.style_id} className='w-3/12 p-1' onClick={e => {
            if (index !== styleIndex) {
              changeStyleIndex(index);
            }
          }}>
            {index === styleIndex && <div className='absolute mt-1 bg-white rounded-full'><AiFillCheckCircle className='sm:text-base text-2xl text-[#1E54B1]' /></div>}
            <img alt='style' style={safariStyle} className='aspect-square min-w-full max-h-halfScreen object-cover rounded-full' src={style.photos[0].thumbnail_url}></img></div>)
        })}
      </div>
    </div>
  );
};

export default Styles;