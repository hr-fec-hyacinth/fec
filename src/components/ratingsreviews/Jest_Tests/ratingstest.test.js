import React from 'react';
import { render } from '@testing-library/react';
import { screen, configure } from '@testing-library/react'
import RatingsReviews from '../RatingsReviews.jsx';
import SortOptions from '../SortOptions.jsx';
import Ratings from '../Ratings.jsx';
import Reviews from '../Reviews.jsx';
import CharacteristicInputTable from '../CharacteristicInputTable.jsx';

let product = {
  "id": 11,
  "name": "Air Minis 250",
  "slogan": "Full court support",
  "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
  "category": "Basketball Shoes",
  "default_price": "0",
};

let metaReview = {
  "product_id": "37313",
  "ratings": {
      "1": "5",
      "2": "3",
      "3": "20",
      "4": "33",
      "5": "25"
  },
  "recommended": {
      "false": "26",
      "true": "60"
  },
  "characteristics": {
      "Fit": {
          "id": 125036,
          "value": "2.4523809523809524"
      },
      "Length": {
          "id": 125037,
          "value": "2.6388888888888889"
      },
      "Comfort": {
          "id": 125038,
          "value": "2.7466666666666667"
      },
      "Quality": {
          "id": 125039,
          "value": "3.0533333333333333"
      }
  }
};

let reviews = [
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

let starFilterNone = {
  "filterOn": false,
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false
}

describe('Renders the Ratings and Reviews Section', () => {

  it('Renders the RatingReviews sSection', () => {
    const placeholder = 'RATINGS & REVIEWS';
    const { getByText } = render(<RatingsReviews product={product} meta={metaReview} />);
    getByText(placeholder);
  })

  it('Initially sorts as relevance', () => {
    const placeholder = 'relevance';
    const { getByText } = render(<RatingsReviews product={product} meta={metaReview} />);
    getByText(placeholder);
  })

}
)

describe('Checking SortOptions Renders with Ratings',  () => {
  it('Sort By Section is rendered', async () => {
    const placeholder = 'reviews';
    await render(<SortOptions meta={metaReview} sortBy={'relevance'} sortCB={() => {console.log('hi')}}/>);
    screen.getByText('reviews', {exact: false})
  })

  // Test Interactions
  // it('Sort By Dropdown is selectable', () => {
  //   render(<SortOptions meta={metaReview} sortBy={'relevance'} sortCB={() => {console.log('hi')}}/>);
  // })

});

describe('ReviewList', () => {

  it('Check that I recommend this product works', async () => {
    const numberOfReviews = reviews.length;
    const props = {
      reviewsCount: 2,
      starFilterActive: false,
    }

    await render(<Reviews reviews={reviews} filterStars={starFilterNone} reviewsCount={2} starFilterActive={false}/>)
    screen.getByText('I recommend this product', {exact: false});
  })

  it('Counts the Number of Reviews', async () => {
    const {container} = await render(<Reviews reviews={reviews} filterStars={starFilterNone} reviewsCount={2} starFilterActive={false}/>);
    let cards = container.getElementsByClassName('ReviewCardContainer mx-auto px-3');
    expect(cards).toHaveLength(2);
  });

  const starFilterFive = {
    ...starFilterNone,
    "1": true
  }

  it('Filter By 1 Star Works', async () => {
    const {container} = await render(<Reviews reviews={reviews} filterStars={starFilterFive} reviewsCount={2} starFilterActive={false}/>);
    let cards = container.getElementsByClassName('ReviewCardContainer mx-auto px-3');
    expect(cards).toHaveLength(1);
  });


});

// it('Clicking the form button loads the form', async () => {

// });