import React, { Component } from 'react';
import './App.css';
import MarkDown from './components/markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarkDown />
      </div>
    );
  }
}

export default App;
