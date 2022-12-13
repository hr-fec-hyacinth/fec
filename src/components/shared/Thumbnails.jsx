import React, { useState } from 'react';
import Expanded from './Expanded.jsx'

const Thumbnails = ({ photosSrcList, expandOnClick }) => {

  const [expand, setExpand] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [clickIndex, setClickIndex] =useState(0);

  const handleThumbnailClick = e => {
    if(expandOnClick) {
      setImageIndex(Number(e.currentTarget.getAttribute('index')));
      setExpand(true);
    }
  }

  const thumbnails = photosSrcList.map((src, i) => <img className='max-w-[5rem] p-[3px] border rounded border-neutral-400 bg-white/30 my-3' src={src} key={i} onClick={handleThumbnailClick} index={i}/>);

  return (
    <>
      <div className='flex flex-row gap-3 self-center items-center'>
        {thumbnails}
      </div>
      {expand && <Expanded setExpand={setExpand} imageIndex={imageIndex} setImageIndex={setImageIndex} imageList={photosSrcList} />}
    </>
  );
}

export default Thumbnails;