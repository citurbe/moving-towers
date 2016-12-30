import React, { Component } from 'react';
import '../public/styles/App.css';
import Tower from './components/Tower'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tradewind Towers!</h2>
          <Tower />
        </div>
      </div>
    );
  }
}

export default App;
