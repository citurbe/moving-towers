import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { move } from '../actions/action.js'

class Controls extends React.Component {


  //  hanoi(n, source, dest, aux){
  //    source.discs = this.props.towers[`tower${source.id}`];
  //    dest.discs = this.props.towers[`tower${dest.id}`];
  //    aux.discs = this.props.towers[`tower${aux.id}`];
  //   //  console.log("in hanoi", source, dest, aux)
  //   if (n === 0){
  //     return;
  //   }
  //      this.hanoi(n-1, source, aux, dest);
  //      this.props.move(source, dest);
  //      this.hanoi(n-1, aux, dest, source);
  // }

  handleClick(event) {
    this.props.hanoi(this.props.towers.tower1.length, {id: 1, discs: this.props.towers.tower1}, {id: 3, discs: this.props.towers.tower3}, {id: 2, discs: this.props.towers.tower2});
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>SHOW ME WHAT YOU{"\'"}VE GOT!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({move:move}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
