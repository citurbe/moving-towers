import React from 'react';
import Disc from './Disc';

class Tower extends React.Component {

  constructor(props){
    super(props);
    this.state = {tower: [4,3,2,1]};
  }

  getY(value) {
    return 200 - (10 * (value + 1));
  }

  render() {
    return(
      <svg height='200px' width='300px' className='tower'>
        <rect x='50' y='2' width='10' height='100%' fill='gray' />
        {this.state.tower.map((item, index) => {
          return <Disc value={item} yVal={this.getY(index)} />;
        })};

      </svg>
    );
  }

}

export default Tower
