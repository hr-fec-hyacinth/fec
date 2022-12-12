import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YourOutfitCard from './YourOutfitCard.jsx'
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'

//First card of list always needs to be add to outfit list
const YourOutfit = ({ product, switchProduct, styles, metaReview, outfit, setOutfit, style }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
            <MdArrowBackIos data-testid='back-arrow' className='flex-none back-arrow absolute left-12 top-2/4 z-20 cursor-pointer select-none hover:text-white' onClick={prevSlide} />
          }
          {slides.map((slide, index) => (
            <YourOutfitCard slide={slide} key={index}index={index} product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview} outfit={outfit} setOutfit={setOutfit} setCurrentIndex={setCurrentIndex} style={style} />
          ))}
          {currentIndex < length - 3 &&
            <MdArrowForwardIos data-testid='forward-arrow' className='flex-none forward-arrow absolute right-tenVH top-2/4 z-20 cursor-pointer select-none hover:text-white' onClick={nextSlide} />
          }
        </div>
      </div>
    </>
  )
}

export default YourOutfit;