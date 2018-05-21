import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Image from './components/Image';

class App extends Component {
  render() {
    return (
      <div>
        <Image />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
