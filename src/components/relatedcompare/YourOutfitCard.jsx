import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';

const YourOutfitCard = ({slide}) => {

  //Should have onClick to allow for main product view to change to this item
  return (
    <div className='px-2'>
      <RxCrossCircled className='absolute cursor-pointer z-8'/>
      <div className='container border border-black'>
        <img src={slide.image} alt='Product Picture'/>
        <div>
          Category <br/>
          Product Name <br/>
          Price <br/>
          Star Rating <br/>
        </div>
      </div>
    </div>
  )
}

export default YourOutfitCard;