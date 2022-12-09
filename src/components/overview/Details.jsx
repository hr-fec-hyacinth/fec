import React from 'react';
import { MdCheck } from 'react-icons/md';

const { useState, useEffect } = React;

const Details = ({ product }) => {
  const [features, updateFeatures] = useState([]);

  useEffect(() => {
    updateFeatures(product.features);
  }, [product])

  return (
    <div className='flex sm:flex-row flex-col mt-4 text-xl sm:text-sm'>
      <div className={product.slogan || product.description ? 'w-full sm:w-8/12 sm:border-r-[2px] border-slate-400 sm:text-left text-center sm:mb-0 mb-4 p-2 sm:pl-0 sm:pl-20 sm:pr-0' : 'hidden'}>
        <p className='sm:text-base text-2xl text-slate-500 sm:mb-0 mb-1'>{product.slogan}</p>
        <p>{product.description}</p>
      </div>
      <div className='w-full sm:w-4/12 flex flex-col justify-center sm:p-1 p-4 mx-auto'>
        {features && features.map((feature, i) => {
          return (
            <p key={i} className='flex justify-between border-b-[1px] last:border-b-0 border-slate-400'>
              <span>{feature.feature}</span>
              {feature.value ? <span>{feature.value}</span> : <MdCheck />}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Details;