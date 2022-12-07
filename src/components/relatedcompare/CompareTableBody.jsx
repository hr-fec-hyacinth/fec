import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdCheck } from 'react-icons/md'

const CompareTableBody = ({ detail }) => {
  let currentProductValue;
  let comparedProductValue;

  detail[1].forEach((characteristic) => {
    if (characteristic.currentProduct) {
      currentProductValue = characteristic.currentProduct
    }
    if (characteristic.comparedProduct) {
      comparedProductValue = characteristic.comparedProduct
    }
  })

  return (
    <>
      <tbody className='text-xs'>
        <tr>
          <td className='text-left'>{currentProductValue}</td>
          <td className='text-center'>{detail[0]}</td>
          <td className='text-right'>{comparedProductValue}</td>
        </tr>
      </tbody>
    </>
  )
}

export default CompareTableBody;