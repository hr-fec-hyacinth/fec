import React, { useState, useEffect } from 'react';
import api from '../../../server/api.js';
import axios from 'axios';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import CompareModal from './CompareModal.jsx';

const RelatedCompare = ({ product, switchProduct, styles, metaReview, outfit, style }) => {
  const [related, setRelated] = useState([]);
  const [sliderInfo, setSliderInfo] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentCompare, setCurrentCompare] = useState('');

  useEffect(() => {
    let id = product.id || 37314;
    if (product.id) {
      api.getRelated(product.id)
      .then((res) => {
        let set = new Set(res)
        setRelated(Array.from(set))
      })
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
    <>
      <div className='my-10' onClick={e => api.postInteraction(e, 'Related')}>
        <br/>
        {openModal && <CompareModal product={product} sliderInfo={sliderInfo} currentCompare={currentCompare} openModal={openModal} setOpenModal={setOpenModal} />}
        <h4 className='ml-28 text-stone-500'>RELATED PRODUCTS</h4>
        <RelatedProducts sliderInfo={sliderInfo} switchProduct={switchProduct} openModal={openModal} setOpenModal={setOpenModal} setCurrentCompare={setCurrentCompare} style={style} />
        <br/>
        <h4 className='ml-28 text-stone-500 pt-8'>YOUR OUTFIT</h4>
        <YourOutfit product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview} outfit={outfit} style={style} />
        <br/>
      </div>
    </>
  )
}

export default RelatedCompare;