import React, { Component, Fragment } from 'react';
import Home from './components/Home'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Project from './components/Project'
import Resume from './components/Resume'
import Middle from './components/Middle'
import Contact from './components/Contact'
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
      <Footer />
      <Contact /> 
      </Fragment>
    );
  }
}

export default App;
