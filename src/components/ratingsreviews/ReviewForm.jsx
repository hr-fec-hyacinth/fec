import React from 'react';
import { useState, useEffect } from 'react';

const ReviewForm = ({product, meta}) => {
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

  const [characteristics, setCharacteristics] = useState({});

  // CSS Styling for table specifically to stretch the whole row
    // Affect Radio Buttons
  const tableStyling = {};

  // CSS styling for
  const starRating = {}

  const handleOnChange = (e, name) => {
    e.preventDefault();
  }

  // first div ratings needs to be replaced with selectable stars component
  // map through the keys and turn it into a row
  return (
      <div className="flex z-30 flex-col h-full items-center space-x-2 justify-center">
        <p>Leave A Review Below:</p>
        <div className="flex-initial w-6/12">
          <form>

            <div>
              <label>Rating:
                <input type="text"></input>
              </label>
            </div>

            <div>
              <label>
                <input type="text"></input>
              </label>
            </div>

            <div>
               <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option default value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </div>

            <div>
              <table>
              {Object.keys(fields.characteristics).map((el, i) => {
                return (
                  <tbody>
                    <tr className="w-10/12">
                      <td>{el}</td>
                      <td>
                        <input
                          type="radio"
                          name={el + i}
                          value="1"
                          onChange={handleOnChange}
                        />
                      </td>
                      <td>
                      <input
                          type="radio"
                          name={el + i}
                          value="2"
                          onChange={handleOnChange}
                        />
                      </td>
                      <td>
                      <input
                          type="radio"
                          name={el + i}
                          value="3"
                          onChange={handleOnChange}
                        />
                      </td>
                      <td>
                        <input
                            type="radio"
                            name={el + i}
                            value="4"
                            onChange={handleOnChange}
                          />
                      </td>
                      <td>
                        <input
                            type="radio"
                            name={el + i}
                            value="4"
                            onChange={handleOnChange}
                          />
                      </td>
                    </tr>
                  </tbody>
                )}
              )}
              </table>
            </div>

            <label>name
              <input type="text"></input>
            </label>
            <br />
            <label>name
              <input type="text"></input>
            </label>
            <br />
            <label>name
              <input type="text"></input>
            </label>
            <br />
            <label>name
              <input type="text"></input>
            </label>
          </form>

        </div>
      </div>
  )
}

export default ReviewForm;