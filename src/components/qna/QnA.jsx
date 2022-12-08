import React, { useState } from 'react';
import QnAList from './QnAList.jsx'
import { HiMagnifyingGlass } from 'react-icons/hi2'


const QnA = ({ product }) => {

  const [search, setSearch] = useState('')

  return (
    <>
      <div className="my-4 text-gray-600">
        QUESTIONS & ANSWERS</div>
      <div className="flex
                      flex-row
                      justify-between
                      items-center
                      border
                      border-black
                      p-2.5
                      font-bold
                      text-s">
        <form>
          <textarea
            className='resize-none focus:outline-none ml-2'
            autoComplete='off'
            type="text"
            name="search"
            value={search}
            placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            onChange={(event) => setSearch(event.target.value)}
            cols="80"
            rows="1"
            maxLength='72'
            />
        </form>
        <HiMagnifyingGlass size={18}/>
      </div>
      <QnAList product={product} search={search}/>
    </>
  )
}

export default QnA;