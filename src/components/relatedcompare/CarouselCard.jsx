import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarouselCard = ({slide}) => {

  return (
    <div className='w-6/12 px-2'>
      <div className='container border border-black'>
        <img src={slide.image} alt='Clothing Picture'/>
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

export default CarouselCard;