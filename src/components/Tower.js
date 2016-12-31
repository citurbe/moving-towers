import React from 'react';
import Disc from './Disc';
import { connect } from 'react-redux';

class Tower extends React.Component {

  constructor(props){
    super(props);

  }

  getY(value) {
    return 295 - (5 * (value + 1));
  }




  render() {

    return(
      <svg height='300px' width='300px' className='tower'>
        <rect x='112.5' y='2' width='5' height='100%' fill='gray' />
        {this.props[`tower${this.props.towerId}`].map((item, index) => {
          return <Disc value={item} yVal={this.getY(index)} key={index} />;
        })};
        <rect x='0' y='295' height='10' width='100%' fill='gray' />
      </svg>
    );
  }

}

function mapStateToProps(state) {
  return state.towers;
}

export default connect(mapStateToProps)(Tower);
