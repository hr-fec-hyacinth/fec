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
  const [metaReview, updateMetaReview] = useState({});

  useEffect(() => {
    api.getProduct(37314)
      .then(product => updateProduct(product))
      .then(() => api.getStyles(37311))
      .then(styles => updateStyles(styles.results))
      .then(() => api.getMetaReviews(37311))
      .then(reviews => updateMetaReview(reviews));
  }, []);

  return (
    <div >
      <div className="w-8/12 justify-center mx-auto min-w-900">
        <Header />
        <Overview product={product} styles={styles} metaReview={metaReview}/>
        <RelatedCompare product = {product} styles={styles}/>
        <QnA product = {product}/>
        {metaReview && <RatingsReviews product={product} meta={metaReview} />}
      </div>
    </div>
  )
}

export default App;