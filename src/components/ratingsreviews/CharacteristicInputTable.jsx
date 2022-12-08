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

  const handleOnChange = (e, name) => {
    cb(e, e.target.name)
  }

  return (<>
    <table className="mx-auto">
    {Object.keys(metaChars).map((el, i) => {
      return (
        <tbody className="odd:bg-slate-200 even:bg-slate-100">
          <tr className="w-full mx-6">
            <td className="pr-8">{el}</td>
            {Array.from({length: 5}, (v, j) => {
              return (
                <td className="pr-6">
                  <input
                    type="radio"
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