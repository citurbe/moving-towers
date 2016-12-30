import React, { Component } from 'react';
import '../public/styles/App.css';
import Tower from './components/Tower'
import Console from './components/Console'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tradewind Towers!</h2>
        </div>
          <Tower towerId='1' />
          <Tower towerId='2' />
          <Tower towerId='3' />
          <Console />
      </div>
    );
  }
}

export default App;
