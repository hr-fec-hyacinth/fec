import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx'
import YourOutfit from './YourOutfit.jsx'
import CompareModal from './CompareModal.jsx'

const RelatedCompare = ({ product, switchProduct }) => {
  const [currentProduct, setCurrentProduct] = useState('');
  const [related, setRelated] = useState([]);
  const [sliderInfo, setSliderInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState('');

  useEffect(() => {
    //let id = product.id || 37311;
    if (37311) {
      api.getRelated(37311)
      .then((res) => {setRelated(res)})
      .catch((err) => {console.log(err)});
    }
  }, [product])

  useEffect(() => {
    //Create an array of promises for the API calls
    const promises = related.map((item) => {
      return Promise.all([
        api.getStyles(item),
        api.getProduct(item),
        api.getMetaReviews(item)
      ])
      .catch((err) => {console.log(err)})
    });
    //Wait for all of the promises to resolve
    Promise.all(promises)
    .then((res) => {setSliderInfo(res)})
    .catch((err) => {console.log(err)});
  }, [related]);

  return (
    <div className=''>
      <br/>
      {openModal && <CompareModal product={product} sliderInfo={sliderInfo} currentCompare={currentCompare} openModal={openModal} setOpenModal={setOpenModal} />}
      <h4 className='ml-20'>Related Products</h4>
      <RelatedProducts sliderInfo={sliderInfo} switchProduct={switchProduct} openModal={openModal} setOpenModal={setOpenModal} setCurrentCompare={setCurrentCompare} />
      <br/>
      <h4 className='ml-20'>Your Outfit</h4>
      <YourOutfit related={related} />
      <br/>
    </div>
  )
}

export default RelatedCompare;