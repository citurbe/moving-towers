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
   if (n === 0){
     return;
   }
    let that = this
      setTimeout(function(){that.hanoi(n-1, source, aux, dest);}, 5000);
      that.props.move(source, dest, aux);
      setTimeout(function(){that.hanoi(n-1, aux, dest, source);}, 5000);
 }


  render() {
    let towers = this.props.towers.map(function(discs){
      return <Tower discs={discs} />;
    });
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tradewind Towers!</h2>
        </div>

          {towers}
          <Console hanoi={this.hanoi.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {towers: Object.values(state.towers), tower1: state.towers.tower1, tower2: state.towers.tower2, tower3:state.towers.tower3};
  // [[1, 2, 3], [3, 4, 5], []]
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({move:move}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
