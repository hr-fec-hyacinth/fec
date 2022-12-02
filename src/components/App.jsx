import React from 'react';
import QnA from './qna/QnA.jsx';
import Overview from './overview/Overview.jsx';
import RatingsReviews from './ratingsreviews/RatingsReviews.jsx';
import RelatedCompare from './relatedcompare/RelatedCompare.jsx';
import Header from './Header.jsx';
import api from '../../server/api.js';

const {useState, useEffect} = React;

const App = () => {
  const [product, updateProduct] = useState({});
  const [styles, updateStyles] = useState([]);

  useEffect(() => {
    api.getProduct(37311)
      .then(product => updateProduct(product))
      .then(() => api.getStyles(37311))
      .then(styles => updateStyles(styles.results));
  }, []);

  return (
    <div>
      <Header />
      <Overview product={product} styles={styles}/>
      <RelatedCompare product = {product} styles={styles}/>
      <QnA product = {product}/>
      <RatingsReviews product = {product}/>
    </div>
  )
}

export default App;