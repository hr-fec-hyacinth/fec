import React from 'react';
import { render } from '@testing-library/react';
import QnA from './QnA.jsx';

let product = {
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  "category": "Basketball Shoes",
  "default_price": "0",
};

it('Renders the Question & Answers Section', () => {
  const placeholder = 'QUESTIONS & ANSWERS';
  const { getByText } = render(<QnA product={product}/>);
  getByText(placeholder);
})