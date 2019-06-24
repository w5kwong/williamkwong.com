import React, { Component } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Body />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
