import axios from 'axios';
require('dotenv').config();
let AUTHKEY = process.env.AUTHKEY;
let CLOUDINARYCLOUDNAME = process.env.CLOUDINARYCLOUDNAME;

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

api.getQuestions = (product_id) => {

  return axios.get(URL + `qa/questions`, {
    headers: {Authorization: AUTHKEY},
    params: {
      product_id: product_id,
      page: 1,
      count: 100
    }
  })
};

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

api.putHelpfulQuestion = (question_id) => {
  return axios.put(URL + `qa/questions/${question_id}/helpful`, {}, {headers: {Authorization: AUTHKEY}})
};

api.putHelpfulAnswer = (answer_id) => {
  return axios.put(URL + `qa/answers/${answer_id}/helpful`, {}, {headers: {Authorization: AUTHKEY}})
};

api.putReportAnswer = (answer_id) => {
  return axios.put(URL + `qa/answers/${answer_id}/report`, {}, {headers: {Authorization: AUTHKEY}})
}

api.putReportQuestion = (question_id) => {
  return axios.put(URL + `qa/questions/${question_id}/report`, {}, {headers: {Authorization: AUTHKEY}})
}

api.postQuestion = (product_id, formResponse) => {
  formResponse['product_id'] = product_id;
  const data = formResponse;
  const config = {
    headers: {Authorization: AUTHKEY}
  }
  return axios.post(URL + `qa/questions`, data, config)
}

api.postAnswer = (question_id, data) => {
  const config = {
    headers: {Authorization: AUTHKEY}
  }
  return axios.post(URL + `qa/questions/${question_id}/answers`, data, config)
}

api.postPhotos = (data) => {
  return axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARYCLOUDNAME}/image/upload`, data)
}

api.voteHelpfulReview = (reviewId) => {
  return axios.put(URL + `reviews/${reviewId}/helpful`, {}, {headers: {Authorization: AUTHKEY}})
}

export default api;