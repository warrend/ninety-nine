import React, { Component } from 'react';
import './App.css';
import Travels from './Travels'
import Intro from '../components/Intro'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Intro />
        <Travels />
      </div>
    );
  }
}

export default App;
