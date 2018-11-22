import React, { Component, Fragment } from 'react';
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="App">
      <Home />
      <div className="testDiv">
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
<Footer />

      </div>
      </Fragment>
    );
  }
}

export default App;
