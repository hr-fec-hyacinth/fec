import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RxCrossCircled } from 'react-icons/rx';
import Stars from '../shared/Stars.jsx'

const AddOutfitItem = ({ slide, product, switchProduct, styles, metaReview, outfit, setOutfit }) => {
  const category = slide[1].category
  const name = slide[1].name
  const image = slide[0][0].photos[0].thumbnail_url || 'https://via.placeholder.com/300?text=Product Image';
  const sale_price = '$' + slide[0][0].sale_price
  const original_price = '$' + slide[0][0].original_price

  const eventHandler = (e) => {
    e.preventDefault();
    switchProduct(e.currentTarget.getAttribute('productid'))
  }

  const removeFromOutfitList = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.getAttribute('productid'))
    console.log(outfit.slice(1))
  }

  return (
    <>
      <div className='px-2'>
        <RxCrossCircled onClick={removeFromOutfitList} className='absolute cursor-pointer z-8' productid={slide[1].id} />
        <div onClick={eventHandler} className='container border border-black cursor-pointer' productid={slide[1].id}>
          <img src={image} alt='Product Picture'/>
          <div>
            {category} <br/>
            {name} <br/>
            {original_price} <br/>
            <Stars /> <br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddOutfitItem;