import React from 'react';
import { useState, useEffect } from 'react';

const ReviewForm = ({product}) => {
  // store form fields as controlled states
  const [fields, setFields] = useState({
    "product_id": 37313,
    "rating": 4,
    "summary": "this is an amazing product",
    "recommend": false,
    "body": "I need to fill 50 words broski, plz let me fill a review :( ahhhhhhhh",
    "name": "calvin testing",
    "email": "calvin@gmail.com",
    "photos": [
          "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
    ],
    "characteristics": {
      "125036": 1,
      "125037": 1,
      "125038": 1,
      "125039": 1
    }
  });

  return (
    <div id='review-form'>
      Leave A Review Below:

    </div>
  )
}

export default ReviewForm;