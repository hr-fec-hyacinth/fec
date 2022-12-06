import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CompareModal = ({ product, sliderInfo, currentCompare, openModal, setOpenModal }) => {

  const displayModal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal)
  }

  return (
    <>
      <div onClick={displayModal} className='overlay absolute bg-transparent w-full h-full z-30'>
        <div className='modalContainer border bg-white min-w-36 z-20 top-1/2 left-1/2 fixed'>
          <div className='title'>
          <h3>Comparing <br/>placeholder placeholder placeholder placeholder placeholder
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompareModal;