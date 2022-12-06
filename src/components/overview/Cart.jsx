import React from 'react';

import api from '../../../server/api.js';

const {useState, useEffect} = React;


const Cart = ({style}) => {
  const [skus, updateSkus] = useState([]);
  const [sku, updateSku] =useState({});
  const [allQuantities, updateAllQuantities] = useState([]);
  const [error, updateError] = useState('');
  const [quantity, updateQuantity] = useState(0);
  const [expand, updateExpand] = useState(false);

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
    <div className='flex justify-evenly'>
      {skus.length === 0 ? <select className='w-5/12 border-2 text-sm' disabled defaultValue='1'><option value='1' disabled hidden>OUT OF STOCK</option></select> :
      <select value={JSON.stringify(sku)} className='w-5/12 border-2' onChange={e => {
        updateError('');
        selectSku(e.target.value);
      }}>
       <option selected disabled hidden value={JSON.stringify({})}>Select Size</option>
       {skus.map((sku, i) => {
          return <option value={JSON.stringify(sku)} key={i}>{sku.size}</option>
       })}
      </select>
      }
      {allQuantities.length === 0 ? <select className='w-5/12 border-2' disabled defaultValue='-'><option value='-'>-</option></select> :
      <select defaultValue='1' className='w-5/12 border-2' onChange={e => {
        updateQuantity(Number(e.target.value));
      }}>
        {allQuantities.map(quant => {
          return <option value={quant} key={quant}>{quant}</option>
        })}
      </select>}
    </div>
    <div className='flex justify-end text-center'>
      <span className='text-red-500 mt-5 mr-1'>{error}</span>
      <button className='border-2 mr-4 mt-4 p-1' onClick={e => {
        e.preventDefault();
        checkout();
      }}>Add To Cart</button>
    </div>
    </form>
  )
};

export default Cart;