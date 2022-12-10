import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompareTable from './CompareTable.jsx';

const CompareModal = ({ product, sliderInfo, currentCompare, openModal, setOpenModal }) => {
  const displayModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    document.body.style.overflow = "scroll";
  }

  return (
    <>
      <div onClick={displayModal} className='bg-transparent w-full h-full z-30 fixed top-0 left-0'>
        <div className='modalContainer border border-white rounded-lg bg-[#091E42] dark:border-[#091E42] dark:bg-white h-84 w-96 z-20 top-1/2 left-1/2 flex flex-col px-4 pb-6 pt-3 fixed'>
          <div className='title'>
            <h3 className='text-neutral-400 text-xs'>Comparing</h3>
            <CompareTable product={product} sliderInfo={sliderInfo} currentCompare={currentCompare} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareModal;