import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompareTableBody from './CompareTableBody.jsx'

const CompareTable = ({ product, sliderInfo, currentCompare }) => {
  let comparedProduct;
  let tableDetails = {};

  sliderInfo.forEach((item, index) => {
    if (item[0].product_id === currentCompare) {
      comparedProduct = item[1]
    }
  })
  //Adding the related product characteristics to table object
  comparedProduct.features.forEach((char, index, features) => {
    if (tableDetails[char.feature] === undefined) {
      tableDetails[char.feature] = [{comparedProduct: char.value}]
    }
  })
  //Adding the current product characteristics to table object
  product.features.forEach((char, index, features) => {
    if (tableDetails[char.feature] === undefined) {
      tableDetails[char.feature] = [{currentProduct: char.value}]
    } else {
      tableDetails[char.feature].push({currentProduct: char.value})
    }
  })

  const currentProductName = product.name
  const comparedProductName = comparedProduct.name
  const detailsArray = Object.entries(tableDetails)

  return (
    <>
      <table className='table-fixed'>
        <thead>
          <tr>
            <th className='text-left'>{currentProductName}</th>
            <th></th>
            <th className='text-right'>{comparedProductName}</th>
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