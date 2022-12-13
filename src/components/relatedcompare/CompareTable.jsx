import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompareTableBody from './CompareTableBody.jsx';

const CompareTable = ({ product, sliderInfo, currentCompare }) => {
  let comparedProduct;
  let tableDetails = {};

  sliderInfo.forEach((item) => {
    if (item[0].product_id === currentCompare) {
      comparedProduct = item[1];
    }
  })


  comparedProduct.features.forEach((char) => {
    if (tableDetails[char.feature] === undefined) {
      tableDetails[char.feature] = [{comparedProduct: char.value}];
    }
  })

  product.features.forEach((char) => {
    if (tableDetails[char.feature] === undefined) {
      tableDetails[char.feature] = [{currentProduct: char.value}];
    } else {
      tableDetails[char.feature].push({currentProduct: char.value});
    }
  })

  const currentProductName = product.name;
  const comparedProductName = comparedProduct.name;
  const detailsArray = Object.entries(tableDetails);

  return (
    <>
      <table className='w-full text-white dark:text-[#091E42]'>
        <thead className='text-xs sticky top-0'>
          <tr>
            <th className='w-1/3 text-bold pt-2 pb-6 text-left'>{currentProductName}</th>
            <th className='w-1/3 pt-2 pb-6'></th>
            <th className='w-1/3 text-bold pt-2 pb-6 text-right'>{comparedProductName}</th>
          </tr>
        </thead>
        {detailsArray.map((detail, index) => (
          <CompareTableBody detail={detail} key={index} />
        ))}
      </table>
    </>
  )
}

export default CompareTable;