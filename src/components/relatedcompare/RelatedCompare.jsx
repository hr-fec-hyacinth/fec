import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import axios from 'axios';
import Carousel from './Carousel.jsx'

const RelatedCompare = ({ product }) => {
  const [related, updateRelated] = useState([]);
  const [relatedStyles, setRelatedStyles] = useState([]);
  let styles = [];

  //Need the styles and product details for the related list to pass to carousel/carousel card
  useEffect(() => {
    if (product !== undefined) {
      api.getRelated(product.id)
      .then((res) => {updateRelated(res)})
      .catch(err => console.log(err))
    }
  }, [product])

  // let test = related.map((item) => {
  //   return api.getStyles(item)
  //   .then((res) => {return res})
  // })

  // Promise.all(test)
  // .then((results) => {
  //   styles = results;
  // })

  // console.log(styles)
  // related.forEach((item) => {
  //   api.getProduct(item)
  //   .then((res) => {relatedProductInfo.push(res)})
  // })

  // relatedProductInfo.forEach((item) => {
  //   console.log('i', item)
  // })

  return (
    <div className='ml-24'>
      <br></br>
      Related Items and Comparison
      <h4>Related Products</h4>
      <Carousel related={related}/>
      <h4>Your Outfit</h4>
      <Carousel related={related}/>
      <br/>
    </div>
  )
}

export default RelatedCompare;