import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx';
import Cart from './Cart.jsx';
import ImageView from './ImageView.jsx';
import api from '../../../server/api.js';
import Details from './Details.jsx';
import Social from './Social.jsx';

const { useState, useEffect } = React;

const Overview = ({ product, styles, metaReview }) => {
  const [style, changeStyle] = useState({});
  const [styleIndex, changeStyleIndex] = useState(0);
  const [stretch, updateStretch] = useState(false);

  useEffect(() => {
    if (styles.length > 0) {
      changeStyle(styles[0]);
    }
  }, [styles]);

  useEffect(() => {
    if (styles.length > 0) {
      changeStyle(styles[styleIndex]);
    }
  }, [styleIndex]);

  useEffect(() => {
    changeStyleIndex(0);
  }, [product])

  const toggleStretch = () => {
    updateStretch(!stretch);
  }

  return (
    <div>
      <div className='flex min-h-full overflow-hidden flex-col sm:flex-row' onClick={e => api.postInteraction(e, 'Overview')}>
        <div className={stretch ? 'min-h-full w-full ease-linear duration-150' : 'w-full sm:w-8/12 ease-linear duration-150'}>
          <ImageView style={styles[styleIndex]} updateStretch={toggleStretch} />
        </div>
        <div data-testid="sidebar" className={stretch ? 'hidden' : 'w-full sm:w-4/12 sm:flex hidden flex-col justify-between'}>
          <ProductInfo product={product} style={style} metaReview={metaReview} />
          <Styles styles={styles} styleIndex={styleIndex} changeStyleIndex={changeStyleIndex} />
          <Cart style={styles[styleIndex]} />
        </div>
      </div>
      <div className='hidden sm:block'>
        <Details product={product}/>
      </div>
      {/* Order of Items for Mobile */}
      <div className='block sm:hidden'>
        <ProductInfo product={product} style={style} metaReview={metaReview} />
        <Styles styles={styles} styleIndex={styleIndex} changeStyleIndex={changeStyleIndex} />
        <Details product={product}/>
        <Cart style={styles[styleIndex]}/>
        <Social />
      </div>
    </div>
  )
}

export default Overview;
