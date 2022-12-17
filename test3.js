const axios = require('axios')
let AUTHKEY = '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'
const URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/'
const fs = require('fs');


const api = {}
api.getRelated = (productId) => {
  return axios.get(URL + 'products/' + productId + '/related', { headers: { Authorization: AUTHKEY } })
    .then(res => res.data)
}

api.getStyles = (productId) => {
  return axios.get(URL + 'products/' + productId + '/styles', { headers: { Authorization: AUTHKEY } })
    .then(res => res.data);
};

api.getMetaReviews = (productId) => {
  return axios.get(URL + 'reviews/meta', { headers: { Authorization: AUTHKEY }, params: { product_id: productId } })
    .then(res => res.data);
};

api.getProduct = (productId) => {
  return axios.get(URL + 'products/' + productId, { headers: { Authorization: AUTHKEY } })
    .then(res => res.data);
};

let interval = .6;
let products = {}
let styles = {}
let metaReviews = {}
let related = {}

for (let i = 37311; i <= 38321; i++) {
  let step = i - 37310;
  setTimeout(() => {
    // api.getRelated(i)
    //   .then(res => related[i] = res)
    //   .catch(fail => {
    //     console.log(fail);
    //     clearTimeout();
    //   })
    api.getStyles(i)
      .then(res => styles[i] = res)
      .catch(fail => {
        console.log(fail);
        clearTimeout();
      })
    // api.getMetaReviews(i)
    //   .then(res => metaReviews[i] = res)
    //   .catch(fail => {
    //     console.log(fail);
    //     clearTimeout();
    //   })
    // api.getProduct(i)
    //   .then(res => products[i] = res)
    //   .catch(fail => {
    //     console.log(fail);
    //     clearTimeout();
    // })
  }, 1000 * step * interval)
}

setTimeout(() => {

  // Convert the object to a JSON string
  const jsonString = JSON.stringify(styles);

  // Write the JSON string to a file
  fs.writeFile('styles.json', jsonString, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}, 600000)

for (let i = 0; i < 8; i++) {
  setTimeout(() => {
    console.log(styles)
  }, i * 60000)
}



