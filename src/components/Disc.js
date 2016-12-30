import React from 'react';

const Disc = (props) => {

  function color(value) {
    if (value % 4 == 0) {
      return 'orange';
    }
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

  function getX(size) {
    return 55 - (size / 2);
  }

  return (
      <rect x={getX(size(props.value))} y={props.yVal} width={size(props.value)} height='10' fill={color(props.value)} />
  );

};

export default Disc;
