import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { show } from '../actions/action.js'

class Controls extends React.Component {


  hanoi(n, source, dest, aux){
    this.props.show(source, aux, dest)
    if (n === 0) return;
       this.hanoi(n-1, source, aux, dest);
       dest.push(source.pop());
       this.hanoi(n-1, aux, dest, source);
  }

  handleClick(event) {
    this.hanoi(this.props.towers.tower1.length, this.props.towers.tower1, this.props.towers.tower3, this.props.towers.tower2);
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
  return bindActionCreators({show: show}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
