import React from 'react';
import { render } from '@testing-library/react';
import Reviews from '../Reviews.jsx';

let product = {
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  "category": "Basketball Shoes",
  "default_price": "0",
};

let metaReview = {
  "product_id": "2",
  "ratings": {
    2: 1,
    3: 1,
    4: 2,
    5: 1
  }
};

reviews = [
  {
      "review_id": 1277585,
      "rating": 5,
      "summary": "this is anamazing product",
      "recommend": true,
      "response": null,
      "body": "I need to fill 50 words broski, 123456789012345678fdsafas90-",
      "date": "2022-12-02T00:00:00.000Z",
      "reviewer_name": "calvin k",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2456750,
              "url": "www.google.com/something.jpg"
          }
      ]
  },
  {
      "review_id": 1276958,
      "rating": 1,
      "summary": "did not like would not buy",
      "recommend": false,
      "response": null,
      "body": "This product ruined my life. All of my friends hate the camo onesie",
      "date": "2022-10-21T00:00:00.000Z",
      "reviewer_name": "shiredawg",
      "helpfulness": 1,
      "photos": [
          {
              "id": 2456379,
              "url": "http://res.cloudinary.com/dqmnjwd2c/image/upload/v1666361170/phish_exaecf.webp"
          }
      ]
  },
  {
      "review_id": 1275597,
      "rating": 5,
      "summary": "Mike luv's the kicks",
      "recommend": true,
      "response": null,
      "body": "balck jadojg adogaodgj. ajgiadgj. adpjgapjg. apjgapdjga. apjgapdjg. apjgapgjp. apjgapgpaja pjagjpa ja jpadgj ap gpj a apjgapjg ",
      "date": "2022-07-18T00:00:00.000Z",
      "reviewer_name": "MikeCheck12",
      "helpfulness": 0,
      "photos": [
          {
              "id": 2455479,
              "url": "blob:http://localhost:3000/e8584f8d-a656-4037-8d34-ec9fb2c9c438"
          },
          {
              "id": 2455480,
              "url": "blob:http://localhost:3000/2c37f435-d4c5-4c85-a953-40756b97ed4c"
          }
      ]
  },
  {
      "review_id": 1275487,
      "rating": 5,
      "summary": "how now brown cow",
      "recommend": true,
      "response": null,
      "body": "how now brown cow how now brown cow how now brown cow",
      "date": "2022-07-16T00:00:00.000Z",
      "reviewer_name": "browncow",
      "helpfulness": 3,
      "photos": [
          {
              "id": 2455392,
              "url": "http://res.cloudinary.com/joehan/image/upload/v1658000193/l1eitivj8vybv7usvwdw.jpg"
          },
          {
              "id": 2455393,
              "url": "http://res.cloudinary.com/joehan/image/upload/v1658000213/srdrekvlzy8yi3mbesrk.jpg"
          }
      ]
  }
]

starFilterNone = {
  "filterOn": false,
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false
}

it('Renders the RatingsSection', () => {
  const placeholder = 'relevance';
  const { getByText } = render(<Reviews product={product} meta={metaReview} sortBy={"relevance"} reviews={reviews} filterStars={starFilterNone} reviewsCount={5} starFilterActive={true}/>);
  getByText(placeholder);
})

