import axios from 'axios';
import { AUTHKEY } from './config.js';

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'

let api = {};
api.getProduct = (productId) => {
  return axios.get(URL + 'products/' + productId, {headers: {Authorization: AUTHKEY}})
    .then(res => res.data);
};

api.getStyles = (productId) => {
  return axios.get(URL + 'products/' + productId + '/styles', {headers: {Authorization: AUTHKEY}})
    .then(res => res.data);
};

api.getQuestions = (product_id, page, count) => {

  return axios.get(URL + `qa/questions`, {
    headers: {Authorization: AUTHKEY},
    params: {
      product_id: product_id,
      // page: page,
      // count: count
    }
  })
}

api.getMetaReviews = (productId) => {
  return axios.get(URL + 'reviews/meta', {headers: {Authorization: AUTHKEY}, params: {product_id: productId}})
    .then(res => res.data);
};

api.getRelated = (productId) => {
  return axios.get(URL + 'products/' + productId + '/related', {headers: {Authorization: AUTHKEY}})
    .then(res => res.data)
}

api.addToCart = (skuId, total) => {
  return axios.post(URL + 'cart', {sku_id: skuId}, {headers: {Authorization: AUTHKEY}})
    .then(res => res.data);
}

api.getReviews = (productId, pageNum, count, sortBy) => {
  return axios.get(URL + 'reviews/',
    {headers: {Authorization: AUTHKEY},
     params: {
      page: pageNum,
      product_id: productId,
      count: count,
      sort: sortBy }
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return new Error(err);
    });
}

api.postInteraction = (e, module) => {
  let time = e.timeStamp;
  let target = e.target;
  let classes = '';

  if (typeof target.className === 'string') {
    classes = target.className.replaceAll(' ', '.');
  }

  let selector = target.tagName.toLowerCase();

  if (classes.length > 0) {
    selector = selector + '.' + classes;
  }

  let params = {
    element: selector,
    widget: module,
    time: String(time)
  };

  return axios.post(URL + 'interactions', params, {headers: {Authorization: AUTHKEY}})
}

export default api;