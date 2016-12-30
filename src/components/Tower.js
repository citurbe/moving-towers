import React from 'react';
import Disc from './Disc';
import { connect } from 'react-redux';

class Tower extends React.Component {

  constructor(props){
    super(props);

  }

  getY(value) {
    return 200 - (10 * (value + 1));
  }




  render() {
    return(
      <svg height='200px' width='150px' className='tower'>
        <rect x='50' y='2' width='10' height='100%' fill='gray' />
        {this.props[`tower${this.props.towerId}`].map((item, index) => {
          return <Disc value={item} yVal={this.getY(index)} />;
        })};
        <rect x='0' y='190' height='10' width='100%' fill='gray' />
      </svg>
    );
  }

}

function mapStateToProps(state) {
  return state.towers;
}

export default connect(mapStateToProps)(Tower);
