import React, { Component } from 'react';
import '../public/styles/App.css';
import Tower from './components/Tower'
import Console from './components/Console'
import { connect } from 'react-redux';
import { move } from './actions/action';
import { bindActionCreators } from 'redux';

class App extends Component {


 hanoi() {
   //this is an iterative version of the classic hanoi solution, since it's much easier to control the timing on iteration
   var towers = this.props.towers;
   var totalDisks = towers[0].length;
   var dir = (totalDisks % 2 === 0) ? 1 : -1;
   var i, towerMin;

   // towerMin will point to tower with smallest disk
   towerMin = 0;

   // we need (2^numberOfDisks - 1) moves
   var numberOfMoves = (1 << totalDisks) - 1;

   // To avoid using % operator we precompute next and prev tables
   var next = [1, 2, 0];
   var prev = [2, 0, 1];

   var moveSmallest = true;
   i = 0;
   const makeOneMove = () => {
       towers = this.props.towers;
       if (this.props.status !== 'stop'){
       if (moveSmallest) {
         var oldTowerMin = towerMin;
         // in JS -1 % 3 === -1, we add 3 to get positive result
         towerMin = (oldTowerMin + dir + 3) % 3;
         let from = {id:oldTowerMin+1, discs:towers[oldTowerMin]};
         let to = {id: towerMin+1, discs: towers[towerMin]}
         console.log(from, to)
         this.props.move(from, to);

       }
       else {
         if (topDiskSize(next[towerMin]) > topDiskSize(prev[towerMin])) {
           let from = {id:prev[towerMin]+1, discs:towers[prev[towerMin]]};
           let to = {id:next[towerMin]+1, discs:towers[next[towerMin]]};
           console.log(from, to)
           this.props.move(from, to);

         }
         else {
           let from = {id:next[towerMin]+1, discs:towers[next[towerMin]]};
           let to = {id:prev[towerMin]+1, discs:towers[prev[towerMin]]};
           console.log(from, to)
           this.props.move(from, to);

         }
     }
     moveSmallest = !moveSmallest;
     if (this.props.status !== 'stop') {
       i++;
     }
     clearInterval(interval);
     interval = setInterval(makeOneMove, this.props.speed);
     if (i === numberOfMoves || this.props.status === 'ready'){
       clearInterval(interval);
     }
   };
   };
   var interval = setInterval(makeOneMove, this.props.speed);

   function topDiskSize(towerIndex) {
     if (towers[towerIndex].length === 0) return 500;
     var tower = towers[towerIndex]
     return tower[tower.length-1];
   }

 }


  render() {
    let towers = this.props.towers.map(function(discs){
      return <Tower discs={discs} />;
    });
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Moving Towers!</h2>
        </div>
        <div className='container'>
          {towers}
          <Console hanoi={this.hanoi.bind(this)} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {towers: Object.values(state.towers), speed:state.speed, status:state.status};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({move:move}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
