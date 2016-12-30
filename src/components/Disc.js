import React from 'react';

const Disc = (props) => {

  function color(value) {
    if (value % 3 === 0){
      return 'green';
    }
    if (value % 2 === 0){
      return 'red';
    }
    return 'blue';
  }

  function size(value) {
    return 15 + (5 * value);
  }

  return (
      <rect x={40} y='190' width='40' height='10' fill='blue' />
  );

};

export default Disc;
