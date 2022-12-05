import React from 'react';
import { useState, useEffect } from 'react';

const ReviewForm = ({product}) => {
  // store form fields as controlled states
  const [fields, setFields] = useState({});

  return (
    <div id='reviewform'>
      Leave A Review Below:
    </div>
  )
}

export default ReviewForm;