import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import AddOutfitItem from './AddOutfitItem.jsx';

const YourOutfitCard = ({ slide, product, switchProduct, styles, metaReview, outfit, setOutfit, setCurrentIndex, index }) => {
  const isAddToOutfitCard = slide.addToOutfit;

  return (
    <>
      {isAddToOutfitCard &&
        <AddToOutfitCard slide={slide} product={product} styles={styles} metaReview={metaReview} outfit={outfit} setOutfit={setOutfit} />
      }
      {!isAddToOutfitCard &&
        <AddOutfitItem slide={slide} index={index} product={product} styles={styles} metaReview={metaReview} outfit={outfit} setOutfit={setOutfit} switchProduct={switchProduct} setCurrentIndex={setCurrentIndex} />
      }
    </>
  )
}

export default YourOutfitCard;