import axios from 'axios';
import AUTHKEY from './config.js';

const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'

let api = {};
api.getProduct = (productId, success = () => {}, error = () => {}) => {
  axios.get(URL + 'products/' + productId, {headers: {Authorization: AUTHKEY}})
    .then(res => success(res.data))
    .catch(err => error(err));
};

api.getStyles = (productId, success = () => {}, error = () => {}) => {
  axios.get(URL + 'products/' + productId + '/styles', {headers: {Authorization: AUTHKEY}})
    .then(res => success(res.data))
    .catch(err => error(err));
};

export default api;