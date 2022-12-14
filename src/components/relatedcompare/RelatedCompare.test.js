import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import RelatedCompare from './RelatedCompare.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import RelatedProductsCard from './RelatedProductsCard.jsx';
import YourOutfit from './YourOutfit.jsx';
import YourOutfitCard from './YourOutfitCard.jsx';
import AddOutfitItem from './AddOutfitItem.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import CompareModal from './CompareModal.jsx';
import CompareTable from './CompareTable.jsx';
import CompareTableBody from './CompareTableBody.jsx';
import mediaQuery from "css-mediaquery";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

let product = {
  "id": 37311,
  "campus": "hr-rfe",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
};

let product2 = {
    "id": 37312,
    "campus": "hr-rfe",
    "name": "Camo Onesie",
    "slogan": "Blend in to your crowd",
    "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    "category": "Test",
    "default_price": "140.00",
    "created_at": "2021-08-13T14:37:33.145Z",
    "updated_at": "2021-08-13T14:37:33.145Z",
    "features": [
        {
            "feature": "Fabric",
            "value": "Canvas"
        },
        {
            "feature": "Buttons",
            "value": "Brass"
        }
    ]
  };

let style = [{
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
}];

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

let metaReview1 = {
  "product_id": "37311",
  "ratings": {
      "1": "53",
      "2": "32",
      "3": "88",
      "4": "131",
      "5": "307"
  },
  "recommended": {
      "false": "105",
      "true": "506"
  },
  "characteristics": {
      "Fit": {
          "id": 125031,
          "value": "3.0992555831265509"
      },
      "Length": {
          "id": 125032,
          "value": "3.1322115384615385"
      },
      "Comfort": {
          "id": 125033,
          "value": "3.2133676092544987"
      },
      "Quality": {
          "id": 125034,
          "value": "3.2447368421052632"
      }
  }
};

let metaReview2 = {
  "product_id": "37313",
  "ratings": {
      "1": "5",
      "2": "3",
      "3": "20",
      "4": "33",
      "5": "25"
  },
  "recommended": {
      "false": "26",
      "true": "60"
  },
  "characteristics": {
      "Fit": {
          "id": 125036,
          "value": "2.4523809523809524"
      },
      "Length": {
          "id": 125037,
          "value": "2.6388888888888889"
      },
      "Comfort": {
          "id": 125038,
          "value": "2.7466666666666667"
      },
      "Quality": {
          "id": 125039,
          "value": "3.0533333333333333"
      }
  }
};

let outfit = [[style, product, 3]];

let setOutfit = () => {};

const sliderInfo = [[styles, product, metaReview1]];

const slide = [styles, product, metaReview1]

const currentCompare = 37314;

const switchProduct = (product_id) => {product_id = 37314};

describe('Renders the Related Products', () => {
  it('Renders the Related Products Section', async () => {
    const placeholder = 'RELATED PRODUCTS';
    const { getByText } = render(<RelatedCompare product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview1} outfit={outfit} setOutfit={setOutfit} style={style}/>);
    getByText(placeholder);
  });

  it('Renders the Outfit List Section', async () => {
    const placeholder = 'YOUR OUTFIT';
    const { getByText } = render(<RelatedCompare product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview1} outfit={outfit} setOutfit={setOutfit} style={style}/>);
    getByText(placeholder);
  });
});

describe('Renders the Modal', () => {
  it ('toggles modal off', async () => {
    const mockSetOpenModal = jest.fn();
    const { getByText } = render( <CompareModal product={product} sliderInfo={sliderInfo} currentCompare={'37311'} openModal={false} setOpenModal={mockSetOpenModal} />);
    const modalElement = getByText("Comparing");
    fireEvent.click(modalElement);
    expect(mockSetOpenModal).toHaveBeenCalled();
  })

  it ("renders modal", async () => {
    const { getByText } = render( <CompareModal product={product} sliderInfo={sliderInfo} currentCompare={'37311'} openModal={false} setOpenModal={() => {}} />);
    const modalElement = getByText("Comparing");
    expect(modalElement).toBeInTheDocument();
  });
})


describe('Renders the Add to Outfit Card', () => {
    it('Renders Add to Outfit on Add to Outfit card', async () => {
      const placeholder = 'Add to Outfit';
      const slide = [{
        addToOutfit: true,
        image: 'https://via.placeholder.com/300?text=%2b'
      }]
      let outfit1 = [slide, [style, product, 3]];
      const { getByText } = render(<AddToOutfitCard slide={slide} product={product} styles={styles} metaReview={metaReview1} outfit={outfit1} setOutfit={setOutfit} />);
      getByText(placeholder);
    });

    it('Adds Item to Outfit', async () => {
        const placeholder = 'Add to Outfit';
        const slide = [{
          addToOutfit: true,
          image: 'https://via.placeholder.com/300?text=%2b'
        }]
        let outfit1 = [slide];
        const { rerender, getByText } = render(<AddToOutfitCard slide={slide} product={product} styles={styles} metaReview={metaReview1} outfit={outfit1} setOutfit={setOutfit} />);
        fireEvent.click(screen.getByTestId('add-outfit'))
        rerender(<AddToOutfitCard slide={slide} product={product} styles={styles} metaReview={metaReview1} outfit={outfit1} setOutfit={setOutfit} />);
        //getByText(placeholder);
        expect(outfit1).toHaveLength(1);
      });

      it('Adds Item to Outfit2', async () => {
        const placeholder = 'Add to Outfit';
        const slide = [{
          addToOutfit: true,
          image: 'https://via.placeholder.com/300?text=%2b'
        }]
        let outfit1 = [slide, [styles, product, metaReview1]];
        const { rerender, getByText } = render(<AddToOutfitCard slide={slide} product={product} styles={styles} metaReview={metaReview1} outfit={outfit1} setOutfit={setOutfit} />);
        fireEvent.click(screen.getByTestId('add-outfit'))
        rerender(<AddToOutfitCard slide={slide} product={product} styles={styles} metaReview={metaReview1} outfit={outfit1} setOutfit={setOutfit} />);
        //getByText(placeholder);
        expect(outfit1).toHaveLength(2);
      });
  });

describe('Renders the Related Products Card', () => {
    it('Renders Category on Related Product Card', async () => {
      const placeholder = 'JACKETS';
      const { getByText } = render(<RelatedProductsCard slide={slide} switchProduct={switchProduct} index={0} key={0} openModal={() => {}} setOpenModal={() => {}} setCurrentCompare={() => {}} setCurrentIndex={() => {}} style={style} product={product} />);
      getByText(placeholder);
    });
  });

describe('Renders the Related Products Carousel', () => {
    const user = userEvent.setup();

    it('Renders Category on Related Product Card', async () => {
      const placeholder = 'JACKETS';
      const { getByText } = render(<RelatedProducts sliderInfo={sliderInfo} switchProduct={switchProduct} openModal={() => {}} setOpenModal={() => {}} setCurrentCompare={() => {}} style={style} product={product} />);
      getByText(placeholder);
    });

    it('Increase current index by 1', async () => {
        const placeholder = 'TEST';
        let sliderInfo2 = [[styles, product, metaReview1], [styles, product2, metaReview1], [styles, product, metaReview1], [styles, product, metaReview1], [styles, product, metaReview1] ]
        const { getByText } = render(<RelatedProducts sliderInfo={sliderInfo2} switchProduct={switchProduct} openModal={() => {}} setOpenModal={() => {}} setCurrentCompare={() => {}} style={style} product={product} />);
        await fireEvent.click(screen.getByTestId('forward-arrow'));
        getByText(placeholder);
      });
  });

describe('Renders the Add to Outfit Card', () => {
  it('Removes an Item from Outfit List', async () => {
    const placeholder = 'Add to Outfit';
    const slide = [style, product, metaReview1]
    let outfit1 = [[styles, product, metaReview1]];
    const { rerender, getByText } = render(<AddOutfitItem slide={slide} index={1} product={product} styles={styles} metaReview={metaReview1} outfit={outfit1} setOutfit={setOutfit} switchProduct={switchProduct} setCurrentIndex={() => {}} style={style} />);
    await fireEvent.click(screen.getByTestId('remove-outfit'));
    expect(outfit1).toHaveLength(1);
  });
});

describe('Renders the Your Outfit Carousel', () => {

    it('Renders Category on Related Product Card', async () => {
      const { getByText } = render(<YourOutfit product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview1} outfit={[]} setOutfit={setOutfit} style={style} />);

    });

    it('Increase current index by 1', async () => {
        const placeholder = 'TEST';
        let outfit2 = [[style, product, metaReview1], [style, product2, metaReview1], [style, product, metaReview1], [style, product, metaReview1], [style, product, metaReview1] ]
        const { getByText } = render(<YourOutfit product={product} switchProduct={switchProduct} styles={styles} metaReview={metaReview1} outfit={outfit2} setOutfit={setOutfit} style={style} />);
        await fireEvent.click(screen.getByTestId('forward-arrow'));
        getByText(placeholder);
      });
  });