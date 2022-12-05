import React from 'react';

const Characteristic = ({characteristicName, characteristicObj}) => {
  return (
    <React.Fragment>
      {characteristicName} : {parseFloat(characteristicObj.value).toFixed(1)}
    </React.Fragment>
  )
}

export default Characteristic;