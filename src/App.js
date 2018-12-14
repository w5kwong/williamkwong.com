import React, { Component } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Navigation from './components/Navigation';
//import Image from './components/Image';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
