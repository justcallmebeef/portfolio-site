import React, { Component, Fragment } from 'react';
import Home from './components/Home'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Resume from './components/Resume'
import Middle from './components/Middle'
import Contact from './components/Contact'
import Bottom from './components/Bottom'
import About from './components/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
      <NavBar />
      <Home />
      <Project />
      <Middle />
      <Resume />
      <Bottom />
      <About />
      <Contact /> 
      </Fragment>
    );
  }
}

export default App;
