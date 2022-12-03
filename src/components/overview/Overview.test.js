import React from 'react';
import { render } from '@testing-library/react';
import Overview from './Overview.jsx';

it('Renders the Overview Section', () => {
  const placeholder = 'Product Overview';
  const { getByText } = render(<Overview />);
  getByText(placeholder);
})