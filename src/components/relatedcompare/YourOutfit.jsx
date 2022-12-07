import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YourOutfitCard from './YourOutfitCard.jsx'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'

const sliderData = [
  {image: 'https://via.placeholder.com/300?text=%2b'},
  {image: 'https://via.placeholder.com/300?text=%2b'},
  {image: 'https://via.placeholder.com/300?text=%2b'},
  {image: 'https://via.placeholder.com/300?text=%2b'},
  {image: 'https://via.placeholder.com/300?text=%2b'}
]

//First card of list always needs to be add to outfit list
const YourOutfit = ({ sliderInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = sliderData.length;

  const nextSlide = (e) => {
    e.preventDefault();
    if (currentIndex >= 0 && currentIndex < length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const prevSlide = (e) => {
    e.preventDefault();
    if (currentIndex > 0 && currentIndex < length) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const getSlides = () => {
    let currentSlides = sliderData.slice(currentIndex, currentIndex + 4);
    return currentSlides;
  }

  const slides = getSlides();

  return (
    <>
      <div className='flex justify-center'>
        <div className='slider relative flex w-10/12'>
          {currentIndex > 0 &&
            <MdArrowBackIos className='back-arrow position absolute left-4 top-2/4 z-10 cursor-pointer select-none' onClick={prevSlide} />
          }
          {currentIndex < length - 3 &&
            <MdArrowForwardIos className='forward-arrow position absolute right-4 top-2/4 z-10 cursor-pointer select-none' onClick={nextSlide} />
          }
          {slides.map((slide, index) => (
            <YourOutfitCard slide={slide} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default YourOutfit;