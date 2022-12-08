import React from 'react';

import api from '../../../server/api.js';

const {useState, useEffect} = React;


const Cart = ({style}) => {
  const [skus, updateSkus] = useState([]);
  const [sku, updateSku] =useState({});
  const [allQuantities, updateAllQuantities] = useState([]);
  const [error, updateError] = useState('');
  const [quantity, updateQuantity] = useState(0);

  useEffect(() => {
    let skuList = [];
    if (style && Object.keys(style.skus).length > 1) {
      Object.keys(style.skus).forEach(skuId => {
        if (style.skus[skuId].quantity) {
          let skuDetails = {};
          skuDetails.id = skuId;
          skuDetails.size = style.skus[skuId].size;
          skuDetails.quantity = style.skus[skuId].quantity;
          skuList.push(skuDetails);
        }
      })
    }
    updateSkus(skuList);
    updateSku({});
    updateAllQuantities([]);
    updateQuantity(0);
    updateError('');
  }, [style])

  const selectSku = (skuDetails) => {
    skuDetails = JSON.parse(skuDetails);
    updateSku(skuDetails);
    let amounts = [];
    if (skuDetails.quantity < 15) {
      for (let i = 1; i <= skuDetails.quantity; i++) {
        amounts.push(i);
      }
    } else {
      for (let i = 1; i <= 15; i++) {
        amounts.push(i);
      }
    }
    updateAllQuantities(amounts);
  }

  const checkout = () => {
    if (allQuantities.length === 0) {
      updateError('Please Select Size');
    } else {
      updateSku({});
      updateAllQuantities([]);
      api.addToCart(sku.id, quantity);
    }
  };

  return (
    <form>
    <div className='flex mt-1 sm:flex-row flex-col justify-evenly'>
      {skus.length === 0 ? <select data-testid="size-select" className='sm:pl-1 w-5/12 sm:w-712 sm:py-2 border-2 text-sm' disabled defaultValue='1'><option value='1' disabled hidden>OUT OF STOCK</option></select> :
      <select data-testid="size-select" value={JSON.stringify(sku)} className='sm:w-7/12 sm:py-2 w-8/12 border-2 sm:p-4 p-4 mx-auto sm:text-base text-2xl sm:mb-0 mb-4 text-center sm:text-left sm:pl-1' onChange={e => {
        updateError('');
        selectSku(e.target.value);
      }}>
       <option selected disabled hidden value={JSON.stringify({})}>Select Size</option>
       {skus.map((sku, i) => {
          return <option data-testid="size-option" value={JSON.stringify(sku)} key={i}>{sku.size}</option>
       })}
      </select>
      }
      {allQuantities.length === 0 ? <select data-testid="quant-select" className='sm:pl-1 sm:py-2 sm:w-4/12 w-8/12 border-2 sm:p-4 p-4 mx-auto sm:text-base text-2xl text-center' disabled defaultValue='-'><option value='-'>-</option></select> :
      <select data-testid="quant-select" defaultValue='1' className='sm:pl-1 sm:py-2 sm:w-4/12 w-8/12 border-2 sm:p-4 p-4 mx-auto sm:text-base text-2xl text-center sm:text-left' onChange={e => {
        updateQuantity(Number(e.target.value));
      }}>
        {allQuantities.map(quant => {
          return <option data-testid="quant-option" value={quant} key={quant}>{quant}</option>
        })}
      </select>}
    </div>
    <div className='flex sm:flex-row flex-col justify-center sm:justify-start text-center'>
      <button className='sm:text-left border-2 sm:mr-4 mt-4 sm:p-4 sm:py-2 p-4 w-6/12 sm:w-8/12 mx-auto sm:mx-2 flex justify-between' onClick={e => {
        e.preventDefault();
        checkout();
      }}><span>Add to Bag</span><span>+</span></button>
      <span className='text-red-500 mt-5 mr-1 ml-2 w-4/12 text-sm text-center'>{error}</span>
    </div>
    </form>
  )
};

export default Cart;