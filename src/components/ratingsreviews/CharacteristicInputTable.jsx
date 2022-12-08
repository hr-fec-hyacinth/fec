import React from 'react';
import { useState, useEffect } from 'react'

/**
 *
 * @param {*} param0
 * @returns
 // will
 // input: MetaCharacteristics: Object with key being name of Characteristic
 // value being Object containing ID as key, and value as the total summary.

 // will contain a state that controls the input table
 // onChange will call the cb, which also updates the final property object for the
 // post request
 // CharInputTable will build the Characteristics Object that upon completion
 */

const CharInputTable = ({metaChars, cb}) => {
  const [tableValues, setTableValues] = useState({});
  const [hover, setHover] = useState({
                              active: false,
                              selected: ''
                            })

  const handleOnChange = (e, name) => {
    cb(e, e.target.name)
  }

  // present an object that changes based on
  const inputHints = {
    Size: [null, 'A size too small', '1/2 size too small', 'Perfect', '½ a size too big', 'A size too wide'],
    Width: [null, 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    Comfort: [null, 'Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: [null, 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: [null, 'Runs Short', 'Runs slightly short', 'Perfect', 'Runs Slightly Long', 'Runs Long'],
    Fit: [null, 'Runs tight', 'Runs slightly tight', 'Perfect', 'Run slightly long', 'Runs Long']
  }

  return (<>
    <table className="mx-auto">
    <tbody>
      <tr>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
    </tbody>
    {Object.keys(metaChars).map((el, i) => {
      return (
        <tbody className='odd:bg-slate-200 even:bg-slate-100'>
          <tr className='w-full mx-6'>
            <td className="pr-8">{el}</td>
            {Array.from({length: 5}, (v, j) => {
              return (
                <td className='pr-6'>
                  <input
                    type='radio'
                    name={metaChars[el].id}
                    value={j}
                    onChange={handleOnChange}
                  />
                </td>
              )
            })}
          </tr>
        </tbody>
      )}
    )}
    </table>
  </>)
}


export default CharInputTable;

// <tbody>
// //           <tr className="w-10/12">
// //             <td>{el}</td>
// <td>
//   <input
//     type="radio"
//     name={el + i}
//     value="1"
//     onChange={handleOnChange}
//   />
// </td>
//             <td>
//             <input
//                 type="radio"
//                 name={el + i}
//                 value="2"
//                 onChange={handleOnChange}
//               />
//             </td>
//             <td>
//             <input
//                 type="radio"
//                 name={el + i}
//                 value="3"
//                 onChange={handleOnChange}
//               />
//             </td>
//             <td>
//               <input
//                   type="radio"
//                   name={el + i}
//                   value="4"
//                   onChange={handleOnChange}
//                 />
//             </td>
//             <td>
//               <input
//                   type="radio"
//                   name={el + i}
//                   value="4"
//                   onChange={handleOnChange}
//                 />
//             </td>
//           </tr>
//         </tbody>