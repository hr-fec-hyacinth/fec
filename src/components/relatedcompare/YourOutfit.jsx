import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YourOutfitCard from './YourOutfitCard.jsx'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'

const sliderData = [{
  addToOutfit: true,
  image: 'https://via.placeholder.com/300?text=%2b'
}]

//First card of list always needs to be add to outfit list
const YourOutfit = ({ product, switchProduct, styles, metaReview }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [outfit, setOutfit] = useState(sliderData)
  const length = outfit.length;

  useEffect(() => {
    if (metaReview) {
      setOutfit(JSON.parse(window.localStorage.getItem('userOutfit')));
    }
  }, []);


  useEffect(() => {
    window.localStorage.setItem('userOutfit', JSON.stringify(outfit));
  }, [outfit]);

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

  if (!Array.isArray(outfit) || outfit.length <= 0) {
    return null;
  }

  const getSlides = () => {
    let currentSlides = outfit.slice(currentIndex, currentIndex + 4);
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
            <YourOutfitCard slide={slide} key={index}index={index} product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview} outfit={outfit} setOutfit={setOutfit} setCurrentIndex={setCurrentIndex} />
          ))}
        </div>
      </div>
    </>
  )
}

export default YourOutfit;