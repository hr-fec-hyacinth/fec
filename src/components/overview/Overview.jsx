import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx';

const {useState, useEffect} = React;

const Overview = ({product, styles, metaReview}) => {
  const [style, changeStyle] = useState({});
  const [styleIndex, changeStyleIndex] = useState(0);

  useEffect(() => {
    if (styles.length > 0) {
      changeStyle(styles[0]);
    }
  }, [styles])

  return (
    <div className='flex'>
      <div className='w-8/12'></div>
      <div className='w-4/12'>
        <ProductInfo product={product} style={style} metaReview={metaReview}/>
        <Styles styles={styles} styleIndex={styleIndex} changeStyleIndex={changeStyleIndex}/>
      </div>
    </div>
  )
}

export default Overview;