import React from 'react';

const { useState, useEffect } = React;

const Details = ({ product }) => {
  const [features, updateFeatures] = useState([]);

  useEffect(() => {
    updateFeatures(product.features);
    console.log(product.features);
  }, [product])

  return (
    <div className='flex sm:flex-row flex-col mt-4'>
      <div className={product.slogan || product.description ? 'w-full sm:w-8/12 border-r-[3px] border-blue-400' : 'hidden flex flex-col justify-evenly'}>
        <p className='text-xl text-slate-500'>{product.slogan}</p>
        <p>{product.description}</p>
      </div>
      <div className='w-full sm:w-4/12 flex flex-col justify-evenly p-1'>
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