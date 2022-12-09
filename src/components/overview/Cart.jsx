import React from 'react';
import { useRef } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import api from '../../../server/api.js';
import averageRating from '../../helper/averageRating.js';

const {useState, useEffect } = React;

const Cart = ({product, style, outfit, setOutfit, styles, metaReview}) => {
  const [skus, updateSkus] = useState([]);
  const [sku, updateSku] =useState({});
  const [allQuantities, updateAllQuantities] = useState([]);
  const [error, updateError] = useState('');
  const [quantity, updateQuantity] = useState(0);
  const [inOutfit, updateInOutfit] = useState(false);
  const selectSize = useRef();

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

  const toggleOutfit = (e) => {
    e.preventDefault();
    for (let i = 1; i < outfit.length; i++) {
      let outfitProduct = outfit[i][1];
      if (product.id === outfitProduct.id) {
        let newOutfit = [...outfit];
        newOutfit.splice(i, 1);
        setOutfit(newOutfit);
        return;
      }
    }
    let newOutfit = [...outfit];
    newOutfit.push([styles, product, averageRating(metaReview.ratings)]);
    setOutfit(newOutfit);
  }

  useEffect(() => {
    let foundProduct = false;

    for (let i = 1; i < outfit.length; i++) {
      let outfitProduct = outfit[i][1];
      if (product.id === outfitProduct.id) {
        updateInOutfit(true);
        foundProduct = true;
      }
    }
    if (!foundProduct) {
      updateInOutfit(false);
    }
  }, [outfit, product, styles]);

  const checkout = () => {
    if (allQuantities.length === 0) {
      updateError('Please Select Size');
      //selectSize.current.focus();
      selectSize.current.setAttribute('size', skus.length);
    } else {
      updateSku({});
      updateAllQuantities([]);
      api.addToCart(sku.id, quantity);
    }
  };

  const collapse = () => {
    selectSize.current.setAttribute('size', 1);
  }

  return (
    <form>
      {error && <span className='sm:ml-2 text-red-500'>{error}</span>}
    <div className='flex mt-1 sm:flex-row flex-col relative w-full h-8'>
      {skus.length === 0 ? <select data-testid="size-select" className='absolute left-2 bg-white sm:w-7/12 sm:py-2 w-8/12 border-2 sm:p-4 p-4 mx-auto sm:text-base text-2xl sm:mb-0 mb-4 text-center sm:text-left sm:pl-1' disabled defaultValue='1'><option value='1' disabled hidden>OUT OF STOCK</option></select> :
      <select data-testid="size-select" id='size-select' ref={selectSize} value={JSON.stringify(sku)} className='z-20 absolute left-2 bg-white sm:w-7/12 sm:py-2 w-8/12 border-2 sm:p-4 p-4 mx-auto sm:text-base text-2xl sm:mb-0 mb-4 text-center sm:text-left sm:pl-1' onChange={e => {
        updateError('');
        selectSku(e.target.value);
      }}>
       <option selected disabled hidden value={JSON.stringify({})}>Select Size</option>
       {skus.map((sku, i) => {
          return <option data-testid="size-option" onClick={collapse} value={JSON.stringify(sku)} key={i}>{sku.size}</option>
       })}
      </select>
      }
      {allQuantities.length === 0 ? <select data-testid="quant-select" className='sm:pl-1 py-2 sm:w-4/12 w-8/12 border-2 mx-auto sm:text-base text-2xl text-center absolute right-0' disabled defaultValue='-'><option value='-'>-</option></select> :
      <select data-testid="quant-select" defaultValue='1' className='sm:pl-1 py-2 sm:w-4/12 w-8/12 border-2 mx-auto sm:text-base text-2xl text-center sm:text-left bg-white absolute right-0' onChange={e => {
        updateQuantity(Number(e.target.value));
      }}>
        {allQuantities.map(quant => {
          return <option data-testid="quant-option" value={quant} key={quant}>{quant}</option>
        })}
      </select>}
    </div>
    <div className='flex sm:flex-row flex-col justify-center sm:justify-start text-center'>
      <button data-testid="add-bag" className={skus.length === 0 ? 'hidden' : 'sm:text-left border-2 sm:mr-4 mt-4 sm:p-4 sm:py-2 p-4 w-8/12 sm:w-9/12 mx-auto sm:ml-2 flex justify-between'} onClick={e => {
        e.preventDefault();
        checkout();
      }}><span>Add to Bag</span><span>+</span></button>
      <button className={skus.length === 0 ? 'sm:ml-2 border-2 sm:mr-0 mt-4 sm:w-2/12 mx-auto sm:mx-0 align-middle text-xl p-4 sm:p-2' : 'border-2 sm:mr-0 mt-4 sm:w-2/12 mx-auto sm:mx-0 align-middle text-xl p-4 sm:p-0'} onClick={toggleOutfit}>{!inOutfit && <AiOutlineHeart className='mx-auto transition-colors'/>}{inOutfit && <AiFillHeart className='mx-auto transition-colors'/>}</button>
    </div>
    </form>
  )
};

export default Cart;