import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SandwichShop from './components/SandwichShop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Make a Sandwich</h2>
        </div>
        <p className="App-intro">
          <SandwichShop />
        </p>
      </div>
    );
  }
}

export default App;
