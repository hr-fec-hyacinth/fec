import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdCheck } from 'react-icons/md';

const CompareTableBody = ({ detail }) => {
  let currentProductValue;
  let currentProductTrue;
  let comparedProductValue;
  let comparedProductTrue;

  detail[1].forEach((characteristic) => {
    if (characteristic.currentProduct) {
      currentProductValue = characteristic.currentProduct;
    } else if (!characteristic.currentProduct && Object.keys(characteristic).includes('currentProduct')) {
      currentProductTrue = true;
    }
    if (characteristic.comparedProduct) {
      comparedProductValue = characteristic.comparedProduct;
    } else if (!characteristic.comparedProduct && Object.keys(characteristic).includes('comparedProduct')) {
      comparedProductTrue = true;
    }
  })

  return (
    <>
      <tbody className='text-xs overflow-auto'>
        <tr>
          {currentProductValue && <td className='text-left w-1/3 py-1.5'>{currentProductValue}</td>}
          {currentProductTrue && <td className='pr-28 text-left w-1/3 py-1.5'><MdCheck /></td>}
          {!currentProductTrue && !currentProductValue && <td className='text-left w-1/3 py-1.5'></td>}
          <td className='text-neutral-400 w-1/3 text-center py-1.5'>{detail[0]}</td>
          {comparedProductValue && <td className='text-right w-1/3 py-1.5'>{comparedProductValue}</td>}
          {comparedProductTrue && <td className='pl-28 w-1/3 py-1.5'><MdCheck /></td>}
          {!comparedProductTrue && !comparedProductValue && <td className='text-left w-1/3 py-1.5'></td>}
        </tr>
      </tbody>
    </>
  )
}

export default CompareTableBody;