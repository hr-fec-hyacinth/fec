import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import Overview from './Overview.jsx';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';
import Styles from './Styles.jsx';
import mediaQuery from "css-mediaquery";
import Details from './Details.jsx';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

let product = {
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  "category": "Basketball Shoes",
  "default_price": "0",
};

let style = {
  "style_id": 220998,
  "name": "Forest Green & Black",
  "original_price": "140.00",
  "sale_price": null,
  "default?": true,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
          "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
      },
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      }
  ],
  "skus": {
      "1281032": {
          "quantity": 8,
          "size": "XS"
      },
      "1281033": {
          "quantity": 16,
          "size": "S"
      },
      "1281034": {
          "quantity": 17,
          "size": "M"
      },
      "1281035": {
          "quantity": 10,
          "size": "L"
      },
      "1281036": {
          "quantity": 15,
          "size": "XL"
      },
      "1281037": {
          "quantity": 4,
          "size": "XL"
      }
  }
};

let meta = {

    "product_id": "2",
    "ratings": {
      2: 1,
      3: 1,
      4: 2,
      5: 1
    }
};

let styles = {
  "product_id": "37311",
  "results": [
      {
          "style_id": 220998,
          "name": "Forest Green & Black",
          "original_price": "140.00",
          "sale_price": null,
          "default?": true,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              }
          ],
          "skus": {
              "1281032": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1281033": {
                  "quantity": 16,
                  "size": "S"
              },
              "1281034": {
                  "quantity": 17,
                  "size": "M"
              },
              "1281035": {
                  "quantity": 10,
                  "size": "L"
              },
              "1281036": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1281037": {
                  "quantity": 4,
                  "size": "XL"
              }
          }
      },
      {
          "style_id": 220999,
          "name": "Desert Brown & Tan",
          "original_price": "140.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1490723286627-4b66e6b2882a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80"
              }
          ],
          "skus": {
              "1281038": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1281039": {
                  "quantity": 16,
                  "size": "S"
              },
              "1281040": {
                  "quantity": 17,
                  "size": "M"
              },
              "1281041": {
                  "quantity": 10,
                  "size": "L"
              },
              "1281042": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1281043": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 221000,
          "name": "Ocean Blue & Grey",
          "original_price": "140.00",
          "sale_price": "100.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2761&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557760257-b02421ae77fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1551506448-074afa034c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1556268652-ad74ebb8f1e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1557394976-32cc983558ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              }
          ],
          "skus": {
              "1281044": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1281045": {
                  "quantity": 16,
                  "size": "S"
              },
              "1281046": {
                  "quantity": 17,
                  "size": "M"
              },
              "1281047": {
                  "quantity": 10,
                  "size": "L"
              },
              "1281048": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1281049": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 221001,
          "name": "Digital Red & Black",
          "original_price": "140.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1530092376999-2431865aa8df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1473691955023-da1c49c95c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60",
                  "url": "https://images.unsplash.com/photo-1517456837005-d757b959ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              }
          ],
          "skus": {
              "1281050": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1281051": {
                  "quantity": 16,
                  "size": "S"
              },
              "1281052": {
                  "quantity": 17,
                  "size": "M"
              },
              "1281053": {
                  "quantity": 10,
                  "size": "L"
              },
              "1281054": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1281055": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 221002,
          "name": "Sky Blue & White",
          "original_price": "140.00",
          "sale_price": "100.00",
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1448526478325-616f2b15b04e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1483056293146-9eac9521932f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1515992854631-13de43baeba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              }
          ],
          "skus": {
              "1281056": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1281057": {
                  "quantity": 16,
                  "size": "S"
              },
              "1281058": {
                  "quantity": 17,
                  "size": "M"
              },
              "1281059": {
                  "quantity": 10,
                  "size": "L"
              },
              "1281060": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1281061": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      },
      {
          "style_id": 221003,
          "name": "Dark Grey & Black",
          "original_price": "170.00",
          "sale_price": null,
          "default?": false,
          "photos": [
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1514866726862-0f081731e63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1506932248762-69d978912b80?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1535639818669-c059d2f038e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1498098662025-04e60a212db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              },
              {
                  "thumbnail_url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
                  "url": "https://images.unsplash.com/photo-1421941027568-40ab08ee5592?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
              }
          ],
          "skus": {
              "1281062": {
                  "quantity": 8,
                  "size": "XS"
              },
              "1281063": {
                  "quantity": 16,
                  "size": "S"
              },
              "1281064": {
                  "quantity": 17,
                  "size": "M"
              },
              "1281065": {
                  "quantity": 10,
                  "size": "L"
              },
              "1281066": {
                  "quantity": 15,
                  "size": "XL"
              },
              "1281067": {
                  "quantity": 6,
                  "size": "XXL"
              }
          }
      }
  ]
};

const metaReview = {
    "product_id": "2",
    "ratings": {
      2: 1,
      3: 1,
      4: 2,
      5: 1
    }
}

describe('Details Section Render', () => {

    it('Renders the product description', () => {
        const description = 'This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.';
        const { getByText } = render(<Details product={product}/>);
        getByText(description);
      });

      it('Renders the product slogan', () => {
        const description = 'Full court support';
        const { getByText } = render(<Details product={product}/>);
        getByText(description);
      });
});

describe('Product Overview Renders Correct Information', () => {

    it('Renders the product name', () => {
        const name = 'Air Minis 250';
        const { getByText } = render(<ProductInfo product={product} style={style} metaReview={meta}/>);
        getByText(name);
      })

      it('Displays original price when there is not a sale price', () => {
        const price = '$140.00';
        const { getByText } = render(<ProductInfo product={product} style={style} metaReview={meta}/>);
        getByText(price);
      })

      it('Displays sale price and original price when on sale', () => {
        const price = '$140.00';
        const sale_price = '$100';
        style.sale_price = '100';
        const { getByText } = render(<ProductInfo product={product} style={style} metaReview={meta}/>);
        getByText(price);
        getByText(sale_price);
      })

      it('Displays product category', () => {
        const category = 'Basketball Shoes';
        const { getByText } = render(<ProductInfo product={product} style={style} metaReview={meta}/>);
        getByText(category);
      })

      it('Display correct number of ratings', () => {
        const category = 'Read all 5 reviews';
        const { getByText } = render(<ProductInfo product={product} style={style} metaReview={meta}/>);
        getByText(category);
      })

})

describe('Add to Cart Render', () => {

    it('Displays error if size is not selected', async () => {
        const { getByText, getAllByAltText, getByTestId } = render(<Cart style={style} />)
        fireEvent.click(screen.getByTestId('add-bag'))
        getByText('Please Select Size');
      })

    it('Size Selector lists all available sizes', async () => {
        const { getByTestId, getAllByTestId } = render(<Cart style={style} />)
        let options = getAllByTestId('size-option')
        expect(options.length).toBe(Object.keys(styles.results[0].skus).length)
      })

    it('Quanity Select does not have options when size is not selected', async () => {
        const { getByTestId, getAllByTestId, queryByTestId } = render(<Cart style={style} />)
        let options = queryByTestId('quant-option')
        expect(options).toBe(null)
      })

    it('Clicking the heart will update the outfit', async () => {
        let outfit = [];
        let updateOutfit = (value) => {outfit = value};
        const { getByTestId, getAllByTestId, queryByTestId } = render(<Cart style={style} outfit={outfit} setOutfit={updateOutfit} styles={styles} metaReview={metaReview}/>)
        let button = getByTestId('toggle-cart');
        fireEvent.click(button);
        expect(outfit.length).toBe(1);
      })

    it('Clicking the heart will remove an item from the outfit if it is added', async () => {
        let outfit = [{
            addToOutfit: true,
            image: 'https://via.placeholder.com/300?text=%2b'
          }];
        let updateOutfit = (value) => {outfit = value};
        const { rerender, getByTestId, getAllByTestId, queryByTestId } = render(<Cart product={product} style={style} outfit={outfit} setOutfit={updateOutfit} styles={styles} metaReview={metaReview}/>)
        let button = getByTestId('toggle-cart');
        fireEvent.click(button);
        expect(outfit.length).toBe(2);
        rerender(<Cart product={product} style={style} outfit={outfit} setOutfit={updateOutfit} styles={styles} metaReview={metaReview}/>)
        fireEvent.click(button);
        expect(outfit.length).toBe(1);
      })

      it('Size Selector Adjusts the options in the quantity selector', async () => {
        let outfit = [{
            addToOutfit: true,
            image: 'https://via.placeholder.com/300?text=%2b'
          }];
        let updateOutfit = (value) => {outfit = value};
        const { rerender, getByTestId, getAllByTestId, queryByTestId } = render(<Cart product={product} style={style} outfit={outfit} setOutfit={updateOutfit} styles={styles} metaReview={metaReview}/>)
        let sizeOptions = getAllByTestId('size-option');
        let xsValue = sizeOptions[0].value;
        fireEvent.change(getByTestId('size-select'), { target: { value: xsValue } })
        expect(sizeOptions[0].selected).toBeTruthy();
        let quantOptions = getAllByTestId('quant-option');
        expect(quantOptions.length).toBeGreaterThan(0);
      })

      it('Size Selector Loads Max Product Quantity if less than 15', async () => {
        let outfit = [{
            addToOutfit: true,
            image: 'https://via.placeholder.com/300?text=%2b'
          }];
        let updateOutfit = (value) => {outfit = value};
        const { rerender, getByTestId, getAllByTestId, queryByTestId } = render(<Cart product={product} style={style} outfit={outfit} setOutfit={updateOutfit} styles={styles} metaReview={metaReview}/>)
        let sizeOptions = getAllByTestId('size-option');
        let xsValue = sizeOptions[0].value;
        fireEvent.change(getByTestId('size-select'), { target: { value: xsValue } })
        expect(sizeOptions[0].selected).toBeTruthy();
        let quantOptions = getAllByTestId('quant-option');
        expect(quantOptions.length).toBe(8);
      })

      it('Quantity Selector Only Shows 15 if product has more than 15', async () => {
        let outfit = [{
            addToOutfit: true,
            image: 'https://via.placeholder.com/300?text=%2b'
          }];
        let updateOutfit = (value) => {outfit = value};
        const { rerender, getByTestId, getAllByTestId, queryByTestId } = render(<Cart product={product} style={style} outfit={outfit} setOutfit={updateOutfit} styles={styles} metaReview={metaReview}/>)
        let sizeOptions = getAllByTestId('size-option');
        let mValue = sizeOptions[2].value;
        fireEvent.change(getByTestId('size-select'), { target: { value: mValue } })
        expect(sizeOptions[2].selected).toBeTruthy();
        let quantOptions = getAllByTestId('quant-option');
        expect(quantOptions.length).toBe(15);
      })

})

describe('Style Select Render', () => {

    it('Clicking a new style changes the style name', async () => {
        let styleIndex = 0;
        let changeStylesIndex = (index) => {
            styleIndex = index;
        }
        const { rerender, getByText } = render(<Styles styles={styles.results} styleIndex={styleIndex} changeStyleIndex={changeStylesIndex} />)
        getByText(/Forest Green/)
        const icons = await screen.getAllByAltText('style')
        fireEvent.click(icons[1])
        rerender(<Styles styles={styles.results} styleIndex={styleIndex} changeStyleIndex={changeStylesIndex} />)
        getByText(/Desert Brown & Tan/)
    })

    it('Clicking on a style will adjust the style index', async () => {
        let styleIndex = 0;
        let changeStylesIndex = (index) => {
            styleIndex = index;
        }
        const { rerender, getByText } = render(<Styles styles={styles.results} styleIndex={styleIndex} changeStyleIndex={changeStylesIndex} />)
        const icons = await screen.getAllByAltText('style')
        expect(styleIndex).toBe(0);
        fireEvent.click(icons[1])
        expect(styleIndex).toBe(1);
        fireEvent.click(icons[3])
        expect(styleIndex).toBe(3);
    })

    it('Displays the style name', async () => {
        const { getByText } = render(<Styles styles={styles.results} styleIndex={0} changeStylesIndex={() => {}} />)
        getByText(/Forest Green/)
    })

    it('Loads Accurate Number of Style Selectors', async () => {
        render(<Styles styles={styles.results} stylesIndex={0} changeStylesIndex={() => {}} />)
        const items = await screen.getAllByAltText('style', { hidden: true })
        expect(items).toHaveLength(styles.results.length)
      })

    it('Clicking on a different style will update the thumbnail list', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const styleList = await screen.getAllByAltText('style')
        let photo = {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        };
        styles.results[1].photos.pop();
        styles.results[1].photos.pop();
        // Second style now has four images
        const loadThumbnails = await screen.getAllByAltText('view_thumbnail')
        expect(loadThumbnails).toHaveLength(styles.results[0].photos.length);
        fireEvent.click(styleList[1]);
        const changedThumbnails = await screen.getAllByAltText('view_thumbnail')
        expect(changedThumbnails).toHaveLength(styles.results[1].photos.length);
    })

})


describe('Image View Render', () => {

    it('Loads Accurate Number of View Thumbnails', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const items = await screen.getAllByAltText('view_thumbnail')
        expect(items).toHaveLength(6)
      })


    it('Loads Only 7 thumbnails if there are more than 7', async () => {
        let photo = {
            "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
            "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
        };
        styles.results[0].photos.push(photo);
        styles.results[0].photos.push(photo);
        // 8 Photos Currently Available
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const items = await screen.getAllByAltText('view_thumbnail')
        expect(items).toHaveLength(7)
      })

      // Changing a style will keep the image index
      it('Clicking on a style will keep the image index', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const styleList = await screen.getAllByAltText('style')
        let image = await screen.getByTestId('image')
        let right = await screen.getByTestId('image-right')
        fireEvent.click(right)
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80)`)
        fireEvent.click(styleList[1])
        image = await screen.getByTestId('image')
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)`)
      })

      it('The down arrow in the carousel will shift the images by one', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let items = await screen.getAllByAltText('view_thumbnail')
        const down = await screen.getByTestId('image-down')
        expect(items[0].src).toBe('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
        fireEvent.click(down)
        items = await screen.getAllByAltText('view_thumbnail')
        expect(items[0].src).toBe('https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
      })

      it('The up arrow in the carousel will shift the images by one', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const down = await screen.getByTestId('image-down')
        fireEvent.click(down)
        let items = await screen.getAllByAltText('view_thumbnail')
        expect(items[0].src).toBe('https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');
        const up = await screen.getByTestId('image-up')
        fireEvent.click(up)
        items = await screen.getAllByAltText('view_thumbnail')
        expect(items[0].src).toBe('https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
      })

      it('Up Arrow Does not show if on the first image', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const up = await screen.queryByTestId('image-up')
        expect(up).toBe(null);
      })

      it('Down Arrow Does not show if last image shows', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let down = await screen.getByTestId('image-down')
        fireEvent.click(down)
        down = await screen.queryByTestId('image-down')
        expect(down).toBe(null);
      })

      it('Left Arrow Does not show if on the first image', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const left = await screen.queryByTestId('image-left')
        expect(left).toBe(null);
      })

      it('Right arrow does not show on last image', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let right = await screen.getByTestId('image-right')
        fireEvent.click(right)
        fireEvent.click(right)
        fireEvent.click(right)
        fireEvent.click(right)
        fireEvent.click(right)
        fireEvent.click(right)
        fireEvent.click(right)
        right = await screen.queryByTestId('image-right')
        expect(right).toBe(null);
      })

      it('Clicking on a thumbnail will change the image', async () => {
        // 8 Photos Currently Available
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        const items = await screen.getAllByAltText('view_thumbnail')
        let image = await screen.getByTestId('image')
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)`)
        fireEvent.click(items[1])
        image = await screen.getByTestId('image')
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80)`)
      })

      it('Clicking the right arrow will change the image', async () => {
        // 8 Photos Currently Available
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)`)
        let right = await screen.getByTestId('image-right')
        fireEvent.click(right)
        image = await screen.getByTestId('image')
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80)`)
      })

      it('Clicking the left arrow will change the image', async () => {
        // 8 Photos Currently Available
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        let right = await screen.getByTestId('image-right')
        fireEvent.click(right)
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80)`)
        let left = await screen.getByTestId('image-left')
        fireEvent.click(left);
        image = await screen.getByTestId('image')
        expect(image.style.backgroundImage).toBe(`url(https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)`)
      })

      it('Clicking the right arrow in the expanded view will shift the image by one', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let expanded = await screen.getByTestId('expanded-image')
        expect(expanded.src).toBe(`https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`)
        let right = await screen.getByTestId('expanded-right')
        fireEvent.click(right)
        expanded = await screen.getByTestId('expanded-image')
        expect(expanded.src).toBe(`https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80`)
      })

      it('Clicking the left arrow in the expanded view will shift the image by one', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let right = await screen.getByTestId('expanded-right')
        fireEvent.click(right)
        let expanded = await screen.getByTestId('expanded-image')
        expect(expanded.src).toBe(`https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80`)
        let left = await screen.getByTestId('expanded-left')
        fireEvent.click(left)
        expanded = await screen.getByTestId('expanded-image')
        expect(expanded.src).toBe(`https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`)
      })

      it('Clicking on the expanded image will render the zoomed image', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let expanded = await screen.getByTestId('expanded-image')
        fireEvent.click(expanded)
        let zoom = await screen.getByTestId('zoom-image')
        expect(zoom.src).toBe(`https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`)
      })

      it('Clicking the default image will render the expanded image', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let expanded = await screen.getByTestId('expanded-image')
        expect(expanded.src).toBe(`https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80`)
      })

      it('Clicking on the Zoom image will end it', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let expanded = await screen.getByTestId('expanded-image')
        fireEvent.click(expanded)
        let zoom = await screen.getByTestId('zoom-image')
        fireEvent.click(zoom)
        zoom = await screen.queryByTestId('zoom-image')
        expect(zoom).toBe(null)
      })

      it('Displays one icon per image in the expanded view', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let imageIcons = await screen.getAllByTestId('image-icon')
        expect(imageIcons.length).toBe(8)
      })

      it('Clicking on an image icon in expnaded view will switch the image', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let image = await screen.getByTestId('image')
        fireEvent.click(image);
        let imageIcons = await screen.getAllByTestId('image-icon')
        fireEvent.click(imageIcons[1])
        let expanded = await screen.getByTestId('expanded-image')
        expect(expanded.src).toBe(`https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80`)
      })

      it('Clicking on the expand image icon will hide the sidebar', async () => {
        let style = styles.results[0];
        const changeStyle = (value) => {style = value};
        render(<Overview product={product} styles={styles.results} style={style} changeStyle={changeStyle} metaReview={meta} />)
        let expand = await screen.getByTestId('outline-expand')
        fireEvent.click(expand);
        let sidebar = await screen.queryByTestId('sidebar', {hidden: true})
        expect(sidebar).toHaveClass('hidden')
      })
})
