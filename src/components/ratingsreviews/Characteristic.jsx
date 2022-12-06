import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'

const Characteristic = ({characteristicName, characteristicObj}) => {
  const boxFill = {
    height: '100%',
    // width: '100%',
    height: '10px',
    backgroundColor: '#c1cffb',
  }

  const arrowStyle = {
    color: 'black',
    position: 'relative',
    bottom: '0',
    left: `${(parseInt(characteristicObj.value) / 5) * 100}%`
  }

  return (
    <div>
      {characteristicName} : {parseFloat(characteristicObj.value).toFixed(1)}
      <div className="flex flex-wrap mx-auto">
        <div className="w-4/12 border-2 border-x-zinc-500" style={boxFill}>
          <p style={{textAlight: 'left'}}>--</p>
        </div>
        <div className="w-4/12 border-2 border-x-zinc-500" style={boxFill}></div>
        <div className="w-4/12 border-2 border-x-zinc-500" style={boxFill}>
          <p style={{textAlign: 'right'}}>++</p>
        </div>
        <div className="mx-auto">
          <AiOutlineArrowUp className='text-blue-400' style={arrowStyle} />
        </div>
      </div>
    </div>
  )
}

export default Characteristic;