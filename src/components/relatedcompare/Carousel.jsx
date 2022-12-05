import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarouselCard from './CarouselCard.jsx'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'

const sliderData = [
  {image: 'https://via.placeholder.com/200?text=1'},
  {image: 'https://via.placeholder.com/200?text=2'},
  {image: 'https://via.placeholder.com/200?text=3'},
  {image: 'https://via.placeholder.com/200?text=4'},
  {image: 'https://via.placeholder.com/200?text=5'},
  {image: 'https://via.placeholder.com/200?text=6'},
  {image: 'https://via.placeholder.com/200?text=7'}
]


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = sliderData.length;
  console.log('index', currentIndex)

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
  console.log(slides)

  return (
    <>
      <div className='slider relative flex items-center w-8/12'>
        {currentIndex > 0 &&
          <MdArrowBackIos className='back-arrow position absolute left-4 top-2/4 z-10 cursor-pointer select-none' onClick={prevSlide}/>
        }
        {currentIndex < length - 3 &&
          <MdArrowForwardIos className='forward-arrow position absolute right-4 top-2/4 z-10 cursor-pointer select-none' onClick={nextSlide}/>
        }
        {slides.map((slide, index) => (
          <CarouselCard slide={slide} key={index}/>
        ))}
      </div>
    </>
  )
}

export default Carousel;