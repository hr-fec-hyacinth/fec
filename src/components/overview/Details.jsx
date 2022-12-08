import React from 'react';

const { useState, useEffect } = React;

const Details = ({ product }) => {
  const [features, updateFeatures] = useState([]);

  useEffect(() => {
    updateFeatures(product.features);
  }, [product])

  return (
    <div className='flex sm:flex-row flex-col mt-4 text-xl sm:text-base'>
      <div className={product.slogan || product.description ? 'w-full sm:w-8/12 border-r-[3px] border-blue-400 sm:text-left text-center sm:mb-0 mb-4 p-2' : 'hidden'}>
        <p className='sm:text-xl text-2xl text-slate-500 sm:mb-0 mb-1'>{product.slogan}</p>
        <p>{product.description}</p>
      </div>
      <div className='w-full sm:w-4/12 flex flex-col justify-evenly sm:p-1 p-4 mx-auto'>
        {features && features.map((feature, i) => {
          return (
            <p key={i} className='flex justify-between'>
              <span>{feature.feature}</span>
              <span>{feature.value}</span>
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Details;