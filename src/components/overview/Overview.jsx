import React from 'react';
import ProductInfo from './ProductInfo.jsx';

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
    <div>
      Product Overview
      <ProductInfo product={product} style={style} metaReview={metaReview}/>
    </div>
  )
}

export default Overview;