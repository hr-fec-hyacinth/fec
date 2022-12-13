import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedProductsCard from './RelatedProductsCard.jsx';
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';

const RelatedProducts = ({ sliderInfo, switchProduct, openModal, setOpenModal, setCurrentCompare, style, product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState([]);
  const length = sliderData.length;

  useEffect(() => {
    if (sliderInfo) {
      setSliderData(sliderInfo);
    }
  }, [sliderInfo])

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
            <MdArrowBackIos data-testid='back-arrow' className='flex-none back-arrow absolute left-12 top-2/4 z-20 cursor-pointer hover:text-white select-none' onClick={prevSlide} />
          }
          {slides.map((slide, index) => (
            <RelatedProductsCard slide={slide} switchProduct={switchProduct} index={index} key={index} openModal={openModal} setOpenModal={setOpenModal} setCurrentCompare={setCurrentCompare} setCurrentIndex={setCurrentIndex} style={style} product={product} />
          ))}
          {currentIndex < length - 3 &&
            <MdArrowForwardIos data-testid='forward-arrow' className='flex-none forward-arrow absolute right-oneVW top-2/4 z-20 cursor-pointer hover:text-white select-none' onClick={nextSlide} />
          }
        </div>
      </div>
    </>
  )
}

export default RelatedProducts;