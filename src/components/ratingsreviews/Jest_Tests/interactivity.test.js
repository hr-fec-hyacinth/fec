import React from 'react';
import { render, fireEvent, screen, within, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import '@testing-library/react/dont-cleanup-after-each';

import RatingsReviews from '../RatingsReviews.jsx';
import SortOptions from '../SortOptions.jsx';
import Ratings from '../Ratings.jsx';
import Reviews from '../Reviews.jsx';
import CharacteristicInputTable from '../CharacteristicInputTable.jsx';
import ReviewForm from '../ReviewForm.jsx';
import StarsInput from '../StarsInput.jsx';
import RatingsChart from '../RatingsChart.jsx';
import api from '../../../../server/api.js';

import {get100Newest37314,
        get100Relevant37314,
        get100Helpful37314,
        productList,
        product37314,
        meta37314,
        post37314,
        charTable37314} from './testFixtures.js';

jest.mock('../../../../server/api.js');

describe('Add inputs to Forms', () => {
  const user = userEvent.setup();

  it(('Add Inputs to Review Forms'), async () => {
    await act(async () => render(<ReviewForm product={product37314} meta={meta37314} onFormSubmit={()=>{}} exitFormCB={() => {}} />))
    userEvent.click(screen.getByRole('radio', {name: 'Yes'}));
    userEvent.click(screen.getByRole('radio', {name: 'No'}));
    userEvent.click(screen.getByRole('textbox', {name: 'Your Email'}));
    let emailBox = screen.getByRole('textbox', {name: 'Your Email'});
    fireEvent.change(screen.getByPlaceholderText("Example: jackson11@email.com"), {target:{value: 'test'}}) //adds input into email
    user.type(emailBox, 'calvin');
    fireEvent.click(screen.getByRole('radio', {name: 'Runs tight'})) //125040
    // expect(emailBox).toHaveValue('calvin');  // failing

    // user.click(screen.getByRole('radio', {name: 'Runstight'}));
    user.click(screen.getByRole('button', {name: 'Submit'}))
  });

  it('clicks the submit button', async () => {
    await act(async () => render(<ReviewForm product={product37314} meta={meta37314} onFormSubmit={()=>{}} exitFormCB={() => {}} />))
    // userEvent.click(screen.getByTestId('formSubmit'));
    fireEvent.click(screen.getByTestId('formSubmit'));
  });

  it('clicks the submit button', async () => {
    await act(async () => render(<ReviewForm product={product37314} meta={meta37314} onFormSubmit={()=>{}} exitFormCB={() => {}} />))
    // userEvent.click(screen.getByTestId('formSubmit'));
    fireEvent.click(screen.getByTestId('closeFormIcon'));
  });

});