import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompareTable from './CompareTable.jsx'

const CompareModal = ({ product, sliderInfo, currentCompare, openModal, setOpenModal }) => {
  const displayModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    document.body.style.overflow = "scroll";
    console.log(currentCompare)
  }

  return (
    <>
      <div onClick={displayModal} className='bg-transparent w-full h-full z-30 fixed top-0 left-0'>
        <div className='modalContainer border bg-white h-96 w-96 z-20 top-1/2 left-1/2 fixed'>
          <div className='title'>
            <h3>Comparing</h3>
            <CompareTable product={product} sliderInfo={sliderInfo} currentCompare={currentCompare} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareModal;