import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TetrisCanvas from './Components/TetrisCanvas'
class App extends Component {
  render() {
    return (
      <div className="App">
        <TetrisCanvas/>
      </div>
    );
  }
}

export default App;
