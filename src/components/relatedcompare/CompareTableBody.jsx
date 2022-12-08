import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdCheck } from 'react-icons/md';

const CompareTableBody = ({ detail }) => {
  let currentProductValue;
  let comparedProductValue;

  detail[1].forEach((characteristic) => {
    if (characteristic.currentProduct) {
      currentProductValue = characteristic.currentProduct;
    }
    if (characteristic.comparedProduct) {
      comparedProductValue = characteristic.comparedProduct;
    }
  })

  return (
    <>
      <tbody className='text-xs border'>
        <tr>
          <td className='text-left border'>{currentProductValue}</td>
          <td className='text-center border'>{detail[0]}</td>
          <td className='text-right border'>{comparedProductValue}</td>
        </tr>
      </tbody>
    </>
  )
}

export default CompareTableBody;