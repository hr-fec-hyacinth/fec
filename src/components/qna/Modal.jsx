import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';

const Modal = ({ setModalOpen, children }) => {

  const handleCloseClick = () => {
    setModalOpen(false);
  }

  return (
    <>
      <div
        className='fixed top-0 left-0 z-30 w-full h-full backdrop-blur bg-black/30 flex justify-center items-center dark:bg-white/30'
        onClick={handleCloseClick}>
        <div className='w-fit h-fit rounded-lg dark:bg-[#091E42] bg-white flex flex-col px-6 pb-6 pt-3'
        onClick={e => e.stopPropagation()}>
          <MdClose onClick={handleCloseClick} className='self-end' data-testid="closeIcon"/>
          {children}
        </div>
      </div>


    </>
  );
}

export default Modal;