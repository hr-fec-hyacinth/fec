import React from 'react';
import Characteristic from './Characteristic.jsx';

const CharacteristicsList = ({characteristics}) => {

  return (
    <div className="py-2">
      {Object.keys(characteristics).map((el, i) => {
        return (
          <div key={el + '_' + characteristics[el].id}>
            <Characteristic characteristicName={el} characteristicObj={characteristics[el]}/>
          </div>
        )
      })}
    </div>
  )
};

export default CharacteristicsList;