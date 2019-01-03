import React, { Component } from 'react';
import './index.scss';
import Header from './header/index.jsx';
import Center from './center/index.jsx';
import Footer from './footer/index.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Center/>
        <Footer/>
      </div>
    );
  }
}

export default App;
