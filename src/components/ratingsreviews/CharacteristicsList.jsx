import React from 'react';
import Characteristic from './Characteristic.jsx';

const CharacteristicsList = ({characteristics}) => {
  return (
    <div>
      List of Characteristics:
      {Object.keys(characteristics).map((el, i) => {
        console.log(el);
        console.log(characteristics[i]);
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