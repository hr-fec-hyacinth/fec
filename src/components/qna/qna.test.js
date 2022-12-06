import React from 'react';
import { render } from '@testing-library/react';
import QnA from './QnA.jsx';

it('Renders the Overview Section', () => {
  const placeholder = 'QUESTIONS & ANSWERS';
  const { getByText } = render(<QnA product={}/>); //TODO fill with hard coded api response
  getByText(placeholder);
})