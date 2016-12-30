import React from 'react';
import Disc from './Disc'

class Tower extends React.Component {

  render() {
    return(
      <svg height='200px' width='300px' className='tower'>
        <rect x='50' y='2' width='10' height='100%' fill='gray' />
        <Disc value={1} />
      </svg>
    );
  }

}

export default Tower
