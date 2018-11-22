import React, { Component, Fragment } from 'react';
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Project from './components/Project'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="App">
      <NavBar />
      <Home />
      <Project />
      <Footer />
      </div>
      </Fragment>
    );
  }
}

export default App;
