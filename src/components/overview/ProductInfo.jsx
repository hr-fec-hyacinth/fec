import React from 'react';

const {useState, useEffect} = React;

const ProductInfo = ({product, style}) => {
  const [price, updatePrice] = useState('');
  const [salePrice, updateSalePrice] = useState('');

  // Calculate Price on style change
  useEffect(() => {
    updatePrice(style.original_price);
    if (style.sale_price !== '0' && style.sale_price) {
      updateSalePrice(style.sale_price);
    }
  }, [style]);

  return (
    <div>
      Product Info
      <p>{product.category}</p>
      <p>{product.name}</p>
      {!salePrice && <p>${price}</p>}
      {salePrice && <p><span className='text-red-600 mr-2'>${salePrice}</span><span className='line-through'>${price}</span></p>}
      <p>{product.description}</p>
    </div>
  )
};

export default ProductInfo;