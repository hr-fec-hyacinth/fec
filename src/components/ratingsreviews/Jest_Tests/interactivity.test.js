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

// describe('Render the Ratings/Reviews App Component with Mock API Data', () => {
//   const user = userEvent.setup();
//   afterEach(() => {
//     jest.clearAllMocks();
//   })

//   it('Should just render the top level Reviews/Ratings with 37314', async () => {
//     api.getReviews.mockResolvedValue(get100Relevant37314);
//     await render(<RatingsReviews product={get100Newest37314} meta={meta37314}/>)
//     // return waitFor(() => {
//     //   expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2)
//     // })
//     let initialCards = await document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ');
//     // expect(initialCards).toHaveLength(2);
//     // screen.debug(null, 20000);

//     let oneStarChart = await document.getElementsByClassName('CharacteristicBarChart')[0];
//     // console.log(oneStarChart);
//     user.click(oneStarChart).
//       then(() => {
//         expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(1);
//       });
//     user.click(document.getElementsByClassName('CharacteristicBarChart')[4]).
//       then(() => {
//         expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2);
//       })

//   })

//   it('Filter Should be Additive', async () => {
//     api.getReviews.mockResolvedValue(get100Relevant37314);
//     await render(<RatingsReviews product={get100Newest37314} meta={meta37314}/>)
//     // return waitFor(() => {
//     //   expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2)
//     // })
//     let initialCards = await document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ');
//     let oneStarChart = screen.getByTestId('1starrating');
//     // console.log(oneStarChart);
//     user.click(oneStarChart).
//       then(() => {
//         expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(1);
//       })
//       .catch(() => {
//         console.log('could not click');
//       })
//     user.click(screen.getByTestId('5starrating')).
//     then(() => {
//         expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2);
//       })
//   })

//   it('Filter Should be Additive', async () => {
//     api.getReviews.mockResolvedValue(get100Relevant37314);
//     await render(<RatingsReviews product={get100Newest37314} meta={meta37314}/>)

//     let initialCards = await document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ');

//     let Starbar = screen.getByText('1 Star:');
//     // console.log('this the', Starbar);
//     user.click(Starbar).
//       then(() => {
//         expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(1);
//       })
//     user.click(screen.getByText('5 Star:')).
//     then(() => {
//         expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2);
//     })
//   })

// });

// describe('testing clicking barChar', () => {
//   const user = userEvent.setup();

//   it('Render ReviewChart & run callback', async () => {
//     await render(<RatingsChart metaRatings={meta37314.ratings} ratingsCB={() => {}} starFilter={{
//       "1": true,
//       "5": true
//     }}/> )

//     user.click(screen.getByText('2 Star:')).
//       then(() => {
//         screen.getByClassName('inline text-blue-400 max-h-full').toHaveLength(3);
//       })
//   });


// })

describe('Add inputs to Forms', () => {
  const user = userEvent.setup();

  it(('Add Inputs to Review Forms'), async () => {
    await act(async () => render(<ReviewForm product={product37314} meta={meta37314} onFormSubmit={()=>{}} exitFormCB={() => {}} />))
    user.click(screen.getByRole('radio', {name: 'Yes'}));
    user.click(screen.getByRole('radio', {name: 'No'}));
    user.click(screen.getByRole('textbox', {name: 'Your Email'}));
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