import React, { useState, useEffect } from 'react';
import QForm from './QForm.jsx'
import { MdClose } from 'react-icons/md';

const QModal = ({ setQModalOpen }) => {

  const handleCloseClick = () => {
    setQModalOpen(false);
  }

  return (
    <>
      {/* <div className='w-screen h-screen backdrop-blur bg-black/30 fixed flex justify-center items-center z-30'> */}
      <div
        className='fixed top-0 left-0 z-30 w-full h-full backdrop-blur bg-black/30 flex justify-center items-center'
        onClick={handleCloseClick}>
        <div className='w-fit h-fit rounded-lg bg-white flex flex-col px-6 pb-6 pt-3'
        onClick={e => e.stopPropagation()}>
          <MdClose onClick={handleCloseClick} className='self-end'/>
          <QForm />
        </div>
      </div>


    </>
  );
}

export default QModal;