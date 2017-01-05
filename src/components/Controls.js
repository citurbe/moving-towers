import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { move, setSpeed, play, pause, reset } from '../actions/action.js'

class Controls extends React.Component {


  handleClick(event) {
    if (this.props.status === 'ready'){
    this.props.play();
    this.props.hanoi();
  }
  }

  speedUp(){

    if (this.props.speed > 50){
      this.props.setSpeed(this.props.speed-300);
    }

  }

  playPause(){
  if (this.props.status === 'go') {
    this.props.pause();
  }
  else {
    this.props.play();
  }
  }

  reset(){
    document.getElementById('starting').value = "";
    this.props.reset();
  }

  render() {

    let memo, pp;
    if (this.props.speed > 900){
      memo = 'FASTER!';
    }
    else if (this.props.speed > 600){
      memo = 'EVEN FASTER!!!';
    }
    else {
      memo = 'AS FAST AS I CAN SEE!!!';
    }

    if (this.props.status === 'stop'){
      pp = 'Resume';
    }
    else {
      pp = 'Pause';
    }
    let warning = <br></br>;
    if (this.props.towers.tower1.length > 20){
      warning = "Just so you know, this is going to take a while";
    }


    return(
      <div>
        <p>{warning}</p>
        <button onClick={this.handleClick.bind(this)}>SHOW ME WHAT YOU{"'"}VE GOT!</button>
        <button onClick={this.speedUp.bind(this)}>{memo}</button>
        <button onClick={this.playPause.bind(this)}>{pp}</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({move:move, setSpeed:setSpeed, play:play, pause:pause, reset:reset}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
