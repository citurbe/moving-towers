import React from 'react';
import Disc from './Disc';


class Tower extends React.Component {


  getY(value) {
    return 295 - (5 * (value + 1));
  }

  render() {

    let discs = this.props.discs.map(function(item, index){
      return <Disc value={item} yVal={this.getY(index)} key={index} />;
    }, this);
    return(
      <svg height='300px' width='300px' className='tower'>
        <rect x='112.5' y='2' width='5' height='100%' fill='gray' />
        {discs}
        <rect x='0' y='295' height='10' width='100%' fill='gray' />
      </svg>
    );
  }

}

export default Tower;
