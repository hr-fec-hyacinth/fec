import React from 'react';

const Social = () => {

  return (
    <div className='flex items-center w-full justify-evenly'>
      <div className="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
      <a className="twitter-share-button" rel="canonical"
      href="https://twitter.com/intent/tweet"
      data-size="small">
      Tweet</a>
      <a data-pin-do="buttonBookmark" href="https://www.pinterest.com/pin/create/button/"></a>
    </div>
  )
};

export default Social;