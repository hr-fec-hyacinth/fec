import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai'

const Characteristic = ({characteristicName, characteristicObj}) => {

  const boxFill = {
    height: '5px',
    // width: '100%',
    minHeight: '5px',
    backgroundColor: '#2e93ff',
  }

  const arrowStyle = {
    position: 'relative',
    top: '-5px',
    padding: '2px',
    left: `${(Number(characteristicObj.value) / 5) * 100}%`
  }

  const arrowHolder = {
    width: `90%`
  }

  let leftVar = '--';
  let rightVar = '++';

  switch(characteristicName) {
    case 'Size':
      leftVar = 'Small';
      rightVar = 'Large';
    case 'Width':
      leftVar = 'Narrow';
      rightVar = 'Wide'
    case 'Fit':
      leftVar = 'Narrow';
      rightVar = 'Wide';
      break;
    case 'Length':
      leftVar = 'Short';
      rightVar = 'Long';
      break;
    case 'Comfort':
      leftVar = 'Poor';
      rightVar = 'Excellent';
      break;
    case 'Quality':
      leftVar = 'Poor';
      rightVar = 'Excellent';
      break;
  }

  return (
    <div className="CharacteristicBarChart">
      <span className="text-l"> {characteristicName} </span> : {parseFloat(characteristicObj.value).toFixed(1)}
      <span> </span>
      <div className="flex flex-wrap mx-auto">
        <div className="w-4/12 border-1 text-xs sm:text-sm" style={boxFill}>
          <p style={{textAlign: 'left', verticalAlign: 'bottom'}}>{leftVar}</p>
        </div>
        <div className="w-4/12 border-1 text-xs sm:text-sm" style={boxFill}>
          <p style={{textAlign: 'center', verticalAlign: 'bottom'}}></p>
        </div>
        <div className="w-4/12 border-1 text-xs sm:text-sm" style={boxFill}>
          <p style={{textAlign: 'right'}}>{rightVar}</p>
        </div>
        <div style={arrowHolder}>
        <AiFillCaretUp className='text-white sm:text-blue-400 relative' style={arrowStyle} />
        </div>
      </div>
    </div>
  )
}

export default Characteristic;