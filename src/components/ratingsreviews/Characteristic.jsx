import React from 'react';
import { AiFillCaretUp } from 'react-icons/ai'
import { RiArrowDownSFill } from 'react-icons/ri';

const Characteristic = ({characteristicName, characteristicObj}) => {

  const boxFill = {
    height: '7px',
    // width: '100%',
    minHeight: '7px',
    backgroundColor: '#2e93ff',
  }

  const arrowStyle = {
    zIndex: '15',
    position: 'relative',
    top: '-5px',
    // margin: '-5px',
    marginBottom: '-0.75em',
    left: `${(Number(characteristicObj.value) / 5) * 100}%`
  }

  const arrowHolder = {
    width: `90%`
  }

  let leftVar = '--';
  let midVar ='';
  let rightVar = '++';

  switch(characteristicName) {
    case 'Size':
      leftVar = 'Small';
      rightVar = 'Large';
    case 'Width':
      leftVar = 'Narrow';
      midVar = 'Perfect';
      rightVar = 'Wide';
    case 'Fit':
      leftVar = 'Narrow';
      midVar = 'Perfect';
      rightVar = 'Wide';
      break;
    case 'Length':
      leftVar = 'Short';
      midVar = 'Perfect';
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
    <div className="CharacteristicBarChart my-2.5">
      <span className='text-sm sm:text-l'> {characteristicName} </span> <span className='text-sm sm:text-l'>: {parseFloat(characteristicObj.value).toFixed(1)}</span>
      {/* <span>
      </span> */}
      <div className=''>
      <RiArrowDownSFill className='text-white text-xl sm:text-2xl dark:white relative' style={arrowStyle} />
      <div className="flex flex-wrap mx-auto relative">
        <div className="w-4/12 border-1 text-xs sm:text-sm" style={boxFill}>
          <p style={{textAlign: 'left', verticalAlign: 'bottom', paddingTop: '4px'}}>{leftVar}</p>
        </div>
        <div className="w-4/12 border-x-2 border-slate-200 text-xs sm:text-sm" style={boxFill}>
          <p style={{textAlign: 'center', verticalAlign: 'bottom', paddingTop: '4px'}}>{midVar}</p>
        </div>
        <div className="w-4/12 border-l-1 border-slate-200 text-xs sm:text-sm" style={boxFill}>
          <p style={{textAlign: 'right', paddingTop: '4px'}}>{rightVar}</p>
        </div>
        <div style={arrowHolder}>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Characteristic;