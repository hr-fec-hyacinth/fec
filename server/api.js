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

api.getRelated = (productId) => {
  return axios.get(URL + 'products/' + productId + '/related', {headers: {Authorization: AUTHKEY}})
    .then(res => res.data)
}

export default api;