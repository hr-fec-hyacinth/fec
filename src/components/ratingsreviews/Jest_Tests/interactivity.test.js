import React from 'react';
import { render, fireEvent, screen, within, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import RatingsReviews from '../RatingsReviews.jsx';
import SortOptions from '../SortOptions.jsx';
import Ratings from '../Ratings.jsx';
import Reviews from '../Reviews.jsx';
import CharacteristicInputTable from '../CharacteristicInputTable.jsx';
import ReviewForm from '../ReviewForm.jsx';
import StarsInput from '../StarsInput.jsx';
import api from '../../../../server/api.js';

import * as data from './testFixtures.js';

// describe('Reviews can be filtered with sort options', async () => {
//   const user = userEvent.setup(); // allows writing multiple consecutive interactions
//   render(<App />);
//   it('should increase the counter' () => {
//     expect(screen.getByTestId('counter')).toHaveTextContent('0');
//     return user.click(screen.getByRole('button', {name:
//       'Increase!'}))
//       .then(() => {
//         expect(screen.getByTestId('counter')).toHaveTextContent
//         ('1');
//       })
//   })
// });

describe('Render the Ratings/Reviews App Component with Mock API Data', async () => {
  render(<RatingsReviews product={data.product37314} meta={data.meta37314}/>);
  screen.debug();


});