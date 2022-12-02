import React from 'react';
import QnA from './qna/QnA.jsx';
import Overview from './overview/Overview.jsx';
import RatingsReviews from './ratingsreviews/RatingsReviews.jsx';
import RelatedCompare from './relatedcompare/RelatedCompare.jsx';
import api from '../../server/api.js';

const {useState, useEffect} = React;

const App = () => {
  const [product, updateProduct] = useState({});
  const [styles, updateStyles] = useState([]);

  useEffect(() => {
    api.getProduct(37311, (product) => {
      updateProduct(product);
      api.getStyles(37311, (styles) => {
        updateStyles(styles.results);
      })
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Insert Header</h1>
      </div>
      <Overview />
      <RelatedCompare />
      <QnA />
      <RatingsReviews />
    </div>
  )
}

export default App;