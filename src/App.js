import React, { Component } from 'react';
import '../public/styles/App.css';
import Tower from './components/Tower'
import Console from './components/Console'
import { connect } from 'react-redux';
import { move } from './actions/action';
import { bindActionCreators } from 'redux';

class App extends Component {

  hanoi(n, source, dest, aux){
    source.discs = this.props[`tower${source.id}`];
    dest.discs = this.props[`tower${dest.id}`];
    aux.discs = this.props[`tower${aux.id}`];
   //  console.log("in hanoi", source, dest, aux)
   if (n === 0){
     return;
   }
      this.hanoi(n-1, source, aux, dest);
      this.props.move(source, dest);
      this.hanoi(n-1, aux, dest, source);
 }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tradewind Towers!</h2>
        </div>
          <Tower towerId='1'  />
          <Tower towerId='2' />
          <Tower towerId='3'  />
          <Console hanoi={this.hanoi.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.towers;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({move:move}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
