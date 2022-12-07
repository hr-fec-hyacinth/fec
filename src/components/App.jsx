import React from 'react';
import QnA from './qna/QnA.jsx';
import Overview from './overview/Overview.jsx';
import RatingsReviews from './ratingsreviews/RatingsReviews.jsx';
import RelatedCompare from './relatedcompare/RelatedCompare.jsx';
import Header from './Header.jsx';
import api from '../../server/api.js';
import sortDefault from '../helper/sortDefault.js';

const {useState, useEffect} = React;

const App = () => {
  const [product, updateProduct] = useState({});
  const [styles, updateStyles] = useState([]);
  const [metaReview, updateMetaReview] = useState({});

  useEffect(() => {
    api.getProduct(37314)
      .then(product => updateProduct(product))
      .then(() => api.getStyles(37314))
      .then(styles => sortDefault(styles.results))
      .then(styles => updateStyles(styles))
      .then(() => api.getMetaReviews(37314))
      .then(reviews => updateMetaReview(reviews));
  }, []);

  const switchProduct = (product_id) => {
    api.getProduct(product_id)
      .then(product => updateProduct(product))
      .then(() => api.getStyles(product_id))
      .then(styles => updateStyles(styles.results))
      .then(() => api.getMetaReviews(product_id))
      .then(reviews => updateMetaReview(reviews));
  }

  return (
    <div >
      <div className="w-8/12 justify-center mx-auto min-w-900">
        <Header />
        <Overview product={product} styles={styles} metaReview={metaReview}/>
        <RelatedCompare product={product} switchProduct={switchProduct} styles={styles}/>
        <QnA product = {product}/>
        {metaReview && <RatingsReviews product={product} meta={metaReview} />}
      </div>
    </div>
  )
}

export default App;