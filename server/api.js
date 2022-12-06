import axios from 'axios';
import AUTHKEY from './config.js';

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

api.getReviews = (productId, pageNum, count, sortBy) => {
  return axios.get(URL + 'reviews/', {headers: {Authorization: AUTHKEY}, params: {
    page: pageNum,
    product_id: productId,
    count: count,
    sort: sortBy}})
    .then(res => {
      // console.log('this is the', res)
      return res.data;
    });
}

export default api;