import React from 'react';
import { render } from '@testing-library/react';
import RatingsReviews from './RatingsReviews.jsx';

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

it('Renders the RatingsSection', () => {
  const placeholder = 'RATINGS & REVIEWS';
  const { getByText } = render(<RatingsReviews product={product} meta={metaReview} />);
  getByText(placeholder);
})