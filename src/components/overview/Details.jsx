import React from 'react';

const { useState, useEffect } = React;

const Details = ({ product }) => {
  const [features, updateFeatures] = useState([]);

  useEffect(() => {
    updateFeatures(product.features);
  }, [product])

  return (
    <div className='flex sm:flex-row flex-col mt-4 text-2xl sm:text-base'>
      <div className={product.slogan || product.description ? 'w-full sm:w-8/12 border-r-[3px] border-blue-400 sm:text-left text-center sm:mb-0 mb-4' : 'hidden'}>
        <p className='sm:text-xl text-4xl text-slate-500 sm:mb-0 mb-1'>{product.slogan}</p>
        <p>{product.description}</p>
      </div>
      <div className='w-8/12 sm:w-4/12 flex flex-col justify-evenly p-1 mx-auto'>
        {features && features.map((feature, i) => {
          return (
            <p className='flex justify-between'>
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