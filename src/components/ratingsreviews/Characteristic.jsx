import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai'

const Characteristic = ({characteristicName, characteristicObj}) => {
  const boxFill = {
    height: '100%',
    // width: '100%',
    minHeight: '30px',
    backgroundColor: '#8fc4fc',
  }

  const arrowStyle = {
    color: 'black',
    position: 'relative',
    top: '-5px',
    padding: '2px',
    left: `${(parseInt(characteristicObj.value) / 5) * 100}%`
  }

  let leftVar = '--';
  let rightVar = '++';

  switch(characteristicName) {
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
    <div>
      <span className="text-xl"> {characteristicName} </span> : {parseFloat(characteristicObj.value).toFixed(1)}
      <div className="flex flex-wrap mx-auto">
        <div className="w-4/12 border-2" style={boxFill}>
          <p style={{textAlign: 'left', verticalAlign: 'middle'}}>{leftVar}</p>
        </div>
        <div className="w-4/12 border-2" style={boxFill}>
          <p style={{textAlign: 'center', verticalAlign: 'middle'}}>perfect</p>
        </div>
        <div className="w-4/12 border-2" style={boxFill}>
          <p style={{textAlign: 'right'}}>{rightVar}</p>
        </div>
        <div className="mx-auto">
        <AiFillCaretUp className='text-blue-400' style={arrowStyle} />
        </div>
      </div>
    </div>
  )
}

export default Characteristic;