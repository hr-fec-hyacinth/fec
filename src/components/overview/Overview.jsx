import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Styles from './Styles.jsx';
import Cart from './Cart.jsx';
import ImageView from './ImageView.jsx';

const {useState, useEffect} = React;

const Overview = ({product, styles, metaReview}) => {
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

  const toggleStretch = () => {
    updateStretch(!stretch);
  }

  return (
    <div className='flex min-h-halfScreen overflow-hidden'>
      <div className={stretch ? 'w-full ease-linear duration-150' : 'w-8/12 ease-linear duration-150'}>
        <ImageView style={styles[styleIndex]} updateStretch={toggleStretch}/>
      </div>
      <div className={stretch ? 'hidden' : 'w-4/12'}>
        <ProductInfo product={product} style={style} metaReview={metaReview}/>
        <Styles styles={styles} styleIndex={styleIndex} changeStyleIndex={changeStyleIndex}/>
        <Cart style={styles[styleIndex]}/>
      </div>
    </div>
  )
}

export default Overview;
