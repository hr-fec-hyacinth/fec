import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RelatedCompare from './RelatedCompare.jsx';

it('Renders the Related Products Section', async () => {
  const placeholder = 'Related Products';
  const { getByText } = render(<RelatedCompare />);
  getByText(placeholder);
});
