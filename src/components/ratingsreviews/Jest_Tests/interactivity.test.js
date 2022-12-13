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

describe('Render the Ratings/Reviews App Component with Mock API Data', () => {
  const user = userEvent.setup();

  it('Should just render the top level Reviews/Ratings with 37314', async () => {
    api.getReviews.mockResolvedValue(get100Relevant37314);
    await render(<RatingsReviews product={get100Newest37314} meta={meta37314}/>)
    // return waitFor(() => {
    //   expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2)
    // })
    let initialCards = await document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ');
    // expect(initialCards).toHaveLength(2);
    // screen.debug(null, 20000);

    let oneStarChart = await document.getElementsByClassName('CharacteristicBarChart')[0];
    console.log(oneStarChart);
    user.click(oneStarChart).
      then(() => {
        expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(1);
      });
    user.click(document.getElementsByClassName('CharacteristicBarChart')[4]).
      then(() => {
        expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2);
      })

  })

  it('Filter Should be Additive', async () => {
    api.getReviews.mockResolvedValue(get100Relevant37314);
    await render(<RatingsReviews product={get100Newest37314} meta={meta37314}/>)
    // return waitFor(() => {
    //   expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2)
    // })
    let initialCards = await document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ');
    // expect(initialCards).toHaveLength(2);
    // screen.debug(null, 20000);

    let oneStarChart = screen.getByTestId('1starrating');
    console.log(oneStarChart);
    user.click(oneStarChart).
      then(() => {
        expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(1);
      })
      .catch(() => {
        console.log('could not click');
      })
    user.click(screen.getByTestId('5starrating')).
    then(() => {
        expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2);
      })
  })

  it('Filter Should be Additive', async () => {
    api.getReviews.mockResolvedValue(get100Relevant37314);
    await render(<RatingsReviews product={get100Newest37314} meta={meta37314}/>)
  
    let initialCards = await document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ');

    let Starbar = screen.getByText('1 Star:');
    console.log('this the', Starbar);
    user.click(Starbar).
      then(() => {
        expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(1);
      })
    user.click(screen.getByText('5 Star:')).
    then(() => {
        expect(document.getElementsByClassName('ReviewCardContainer mx-auto px-3 ')).toHaveLength(2);
    })
  })


});

describe('testing clicking barChar', () => {
  const user = userEvent.setup();

  it('Render ReviewChart & run callback', async () => {
    await render(<RatingsChart metaRatings={meta37314.ratings} ratingsCB={() => {}} starFilter={{
      "1": true,
      "5": true
    }}/> )

    user.click(screen.getByText('2 Star:')).
      then(() => {
        screen.getByClassName('inline text-blue-400 max-h-full').toHaveLength(3);
      })

  });

})